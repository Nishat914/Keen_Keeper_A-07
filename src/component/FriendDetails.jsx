import { useParams } from "react-router";
import { use } from "react";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";
import BellImg from "../assets/BellSimpleZ.png";
import ArchiveImg from "../assets/Archive.png" ;
import TrashImg from "../assets/Trash.png" ;
import { FriendContext } from "./FriendContextProvider";
import { useContext } from "react";

const friendsPromise = fetch("/friendsdata.json").then((res) => res.json());

const FriendDetails = () => {
  const { id } = useParams();
  const friends = use(friendsPromise);
  

  const expectedFriend = friends.find((friend) => friend.id == id);

  const {handleActionClick , storedFriends} = useContext(FriendContext);
    console.log(handleActionClick , storedFriends);
    // const data = useContext(FriendContext);
    // console.log(data);
    // console.log(data.storedFriends)
  return (
    <>
        <div className="container mx-auto w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-3 mt-20 mb-20">
            <div className="left   grid grid-cols-1 grid-rows-3 gap-3 h-full">
                <div className="   row-span-2 p-4 shadow-sm ">
                    {/* l-1 */}
                    <div className="card  bg-[#FFFFFF] flex items-center text-center justify-center">
                                <figure >
                                    <img
                                        src={expectedFriend.picture}
                                        alt=""  className="w-24 h-24 rounded-full object-cover"/>
                                </figure>
                                <div className="card-body flex justify-center items-center">
                                    <h2 className="font-bold text-[20px]">
                                        {expectedFriend.name}
                                        
                                    </h2>
                                    

                                    <div className={`badge font-medium text-[12px] ${(expectedFriend.status) === "overdue" ? 'bg-[#EF4444] text-white' : expectedFriend.status === "on-track" ? 'bg-[#244D3F] text-white' : 'bg-[#EFAD44] text-white'}`}>{expectedFriend.status}</div>

                                    <div className="card-actions justify-end">
                                        {(expectedFriend.tags).map((tag ,index) => {
                                            return (
                                                <div key={index} className="badge font-medium text-[12px] bg-[#CBFADB]">{tag}</div>
                                            )
                                        })}
                                        
                                        
                                    </div>

                                    <p className="text-[#64748B] text-[16px] italic font-medium">"{expectedFriend.bio}"</p>
                                    <p className="text-[#64748B] text-[14px] ">Preferred: email</p>
                                </div>
                            </div>
                </div>
                <div className="  gird  grid-rows-3  gap-3">
                    <div className=" mb-2 font-medium p-4 text-center shadow-sm ">
                        {/* l-2-1 */}
                        <div className="flex justify-center items-center gap-4">
                            <img src={BellImg} alt="" />
                            <p>Snooze 2 weeks</p>
                        
                        </div>
                        
                    </div >
                    <div className=" mb-2 font-medium p-4 text-center shadow-sm ">
                        {/* l-2-2 */}
                        <div className="flex justify-center items-center gap-4">
                            <img src={ArchiveImg} alt="" />
                            <p>Archive</p>
                        </div>
                        
                        
                    </div>
                    <div className=" text-[#EF4444] font-medium p-4 text-center shadow-sm">
                        {/* l-2-3 */}
                        <div className="flex justify-center items-center gap-4">
                            <img src={TrashImg} alt="" />
                            <p> Delete</p>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
            <div className="right col-span-2    grid grid-cols-1 grid-rows-3 gap-3">
                <div className="   grid grid-cols-3 gap-3">
                    <div className=" shadow-sm  ">
                        {/* r-1-1 */}
                        <div className="card  bg-base-100  p-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#244D3F] font-semibold text-[32px]">{expectedFriend.days_since_contact}</h2>
                            <p className="text-[#64748B] text-[18px]">Days Since Contact</p>
                            
                        </div>
                    </div>
                    </div>
                    <div className=" shadow-sm">
                        {/* 1-1-2 */}
                        <div className="card  bg-base-100   p-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#244D3F] font-semibold text-[32px]">{expectedFriend.goal}</h2>
                            <p className="text-[#64748B] text-[18px]">Goal (Days)</p>
                            
                        </div>
                    </div>
                    </div>
                    <div className=" shadow-sm">
                        {/* r-1-3 */}
                        <div className="card  bg-base-100   p-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#244D3F] font-semibold text-[32px]">{expectedFriend.next_due_date}</h2>
                            <p className="text-[#64748B] text-[18px]">Next Due</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" shadow-sm">
                    {/* r-2 */}
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4 mt-7">
                            <h2 className="card-title text-[20px]">Relationship Goal</h2>
                            <button className="btn btn-xs">Edit</button>
                        </div>
                        <div className="text-[18px]">
                            <span className="text-[#64748B]">Connect every</span > <span className="font-semibold">{expectedFriend.goal} days</span>
                        </div>
                    </div>
                    
                </div>
                <div className=" shadow-sm">
                    {/* r-3 */}
                    <div className="p-4">
                        <h2 className="font-medium text-[20px] mb-3">Quick Check-In</h2>
                        <div className="flex flex-wrap lg:flex-nowrap    justify-around items-center gap-6 ">
                            <div onClick={() => handleActionClick(expectedFriend , "call", callImg) } className="shadow-sm py-6 px-12">
                                <img src={callImg} alt="" />
                                <p className="font-semibold">Call</p>
                            </div>
                            <div onClick={() => handleActionClick(expectedFriend, "text", textImg)} className="shadow-sm py-6 px-12">
                                <img src={textImg} alt="" />
                                <p className="font-semibold">Text</p>
                            </div>
                            <div onClick={() => handleActionClick(expectedFriend, "video", videoImg)} className="shadow-sm  py-6 px-12">
                                <img src={videoImg} alt="" />
                                <p className="font-semibold">Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default FriendDetails;