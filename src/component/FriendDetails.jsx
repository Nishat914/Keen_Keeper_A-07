import { useParams } from "react-router";
import { use } from "react";

const friendsPromise = fetch("/friendsdata.json").then((res) => res.json());

const FriendDetails = () => {
  const { id } = useParams();
  const friends = use(friendsPromise);

  const expectedFriend = friends.find((friend) => friend.id == id);

  

  return (
    <>
        <div className="container mx-auto w-[80%] grid grid-cols-3 gap-3">
            <div className="left border border-amber-500  grid grid-cols-1 grid-rows-3 gap-3">
                <div className="border border-amber-300   row-span-2">
                    l-1
                </div>
                <div className="border border-amber-300   gird  grid-rows-3  gap-3">
                    <div className="border border-amber-200 mb-2 ">
                        l-2-1
                    </div >
                    <div className="border border-amber-200 mb-2 ">
                        l-2-2
                    </div>
                    <div className="border border-amber-200  ">
                        l-2-3
                    </div>
                </div>
            </div>
            <div className="right col-span-2 border border-amber-500   grid grid-cols-1 grid-rows-3 gap-3">
                <div className="border border-amber-300   grid grid-cols-3 gap-3">
                    <div className="border border-amber-200  ">
                        r-1-1
                    </div>
                    <div className="border border-amber-200">
                        1-1-2
                    </div>
                    <div className="border border-amber-200">
                        r-1-3
                    </div>
                </div>
                <div className="border border-amber-300 ">
                    r-2
                </div>
                <div className="border border-amber-300">
                    r-3
                </div>
            </div>
        </div>
    </>
  );
};

export default FriendDetails;