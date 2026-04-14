import { use } from "react";
import { Link } from "react-router";

const friendsPromise = fetch('/friendsdata.json') . then ((res) => res.json());
const AllFriends = () => {
    const friends = use(friendsPromise);
    console.log(friends);
    return(
        <>
            <h2 className="container mx-auto w-[80%] font-bold text-2xl mb-6">Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 container mx-auto w-[80%]">
                {friends.map((friend) => {
                    return (
                        <Link to={`/frienddetails/${friend.id}` } key={friend.id}>
                            <div className="card bg-base-100  shadow-sm flex items-center text-center justify-center">
                                <figure >
                                    <img
                                        src={friend.picture}
                                        alt=""  className="w-24 h-24 rounded-full object-cover"/>
                                </figure>
                                <div className="card-body flex justify-center items-center">
                                    <h2 className="font-bold text-[20px]">
                                        {friend.name}
                                        
                                    </h2>
                                    <p className="text-[#64748B] text-[12px]">{friend.days_since_contact}d ago</p>
                                    <div className="card-actions justify-end">
                                        {(friend.tags).map((tag ,index) => {
                                            return (
                                                <div key={index} className="badge font-medium text-[12px] bg-[#CBFADB]">{tag}</div>
                                            )
                                        })}
                                        
                                        
                                    </div>
                                    <div className={`badge font-medium text-[12px] ${(friend.status) === "overdue" ? 'bg-[#EF4444] text-white' : friend.status === "on-track" ? 'bg-[#244D3F] text-white' : 'bg-[#EFAD44] text-white'}`}>{friend.status}</div>
                                </div>
                            </div>
                         </Link>
                    )
                })}
            </div>
            
        </>
    )
}
export default AllFriends