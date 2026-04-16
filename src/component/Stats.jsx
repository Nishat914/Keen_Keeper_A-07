import { Pie, PieChart } from 'recharts';
import { Legend } from 'recharts';
import { useContext } from "react";
import { FriendContext } from "./FriendContextProvider";
import { Tooltip } from 'recharts';


const Stats = () => {
    const { storedFriends } = useContext(FriendContext);

const callCount = storedFriends.filter(item => item.action === "call").length;
const textCount = storedFriends.filter(item => item.action === "text").length;
const videoCount = storedFriends.filter(item => item.action === "video").length;

const data = [
  { name: 'Call', value: callCount, fill: '#244D3F' },
  { name: 'Text', value: textCount, fill: '#a855f7' },
  { name: 'Video', value: videoCount, fill: '#0e9f6f' },
];
    return(
        <>
            <div className="container mx-auto w-[80%] mt-20 mb-20">
                <h2 className="text-5xl font-bold mb-5 text-[#244D3F]">
                    Friendship Analytics
                </h2>

                {
                    storedFriends.length === 0 ? (
                    <div className="w-[80%] mx-auto mt-12 mb-12 flex flex-col justify-center items-center gap-4 p-20 shadow  rounded">
                        <h2 className="text-5xl font-bold mb-5 text-[#244D3F]">No activity yet</h2>
                        <p className="text-sm text-gray-500">Start by calling,texting or video chatting!</p>
                    </div>
                ) :
                (
                    <div className='p-10 shadow  rounded'>
                    <h2 className='text-[#244D3F] font-medium text-[20px] mb-10'>By Interaction Type</h2>
                    <PieChart style={{ width: '100%', 
                        maxWidth: '300px', 
                        maxHeight: '60vh', 
                        margin : 'auto' ,
                        aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </PieChart>
                    
                </div>
                )
                }
                
            </div>
        </>
    )
}
export default Stats