import { useContext } from "react";
import { FriendContext } from "./FriendContextProvider";

const Timeline = () => {
    const { storedFriends } = useContext(FriendContext);

    return(
        <div className="w-[80%] mx-auto mt-12 mb-12">
            <h1 className="text-5xl font-bold mb-5">Timeline</h1>

            {
                storedFriends.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 shadow mb-3 rounded">
                        
                        
                        <img src={item.actionImg} className="w-10 h-10" />

                        <div>
                            <p><span className="text-[#244D3F] font-medium capitalize text-[18px]">{item.action} </span><span className="text-sm text-gray-500">with {item.name}</span></p>
                            
                            <p className="text-sm text-gray-500">{item.time}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Timeline;