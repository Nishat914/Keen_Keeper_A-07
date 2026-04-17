import { useContext } from "react";
import { useState } from "react";
import { FriendContext } from "./FriendContextProvider";

const Timeline = () => {
    const { storedFriends } = useContext(FriendContext);
    const [filter, setFilter] = useState("all");

    
    const filteredData =
        filter === "all"
            ? storedFriends
            : storedFriends.filter(item => item.action === filter);
    return(
        <div className="w-[80%] mx-auto mt-12 mb-12 ">
            <h1 className="text-5xl font-bold mb-5 text-[#244D3F]">Timeline</h1>

            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-6 px-4 py-2  shadow rounded text-gray-600"
            >
                <option value="all" >Filter timeline</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            {
                filteredData.length === 0 ? (
                    <div className="w-[80%] mx-auto mt-12 mb-12 flex flex-col justify-center items-center gap-4 p-20 shadow  rounded">
                        <h2 className="text-5xl font-bold mb-5 text-[#244D3F]">No activity yet</h2>
                        <p className="text-sm text-gray-500">Start by calling,texting or video chatting!</p>
                    </div>
                ) :
                (
                    filteredData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 shadow mb-3 rounded">
                        
                        
                        <img src={item.actionImg} className="w-10 h-10" />

                        <div>
                            <p><span className="text-[#244D3F] font-medium capitalize text-[18px]">{item.action} </span><span className="text-sm text-gray-500">with {item.name}</span></p>
                            
                            <p className="text-sm text-gray-500">{item.time}</p>
                        </div>

                    </div>
                ))
                )
            }
        </div>
    )
}

export default Timeline;