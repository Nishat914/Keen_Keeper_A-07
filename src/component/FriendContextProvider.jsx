
import { createContext } from "react"
import { useState } from "react";

export const FriendContext = createContext();

const FriendContextProvider = ({children}) => {
    const [storedFriends , setStoredFriends] = useState([]);

    const handleMarksAsClick = (currentFriend , actionType, actionImg) => {
        
        // const isExistFriend = storedFriends.find((book) => book.id == currentFriend.id);
        // if(isExistFriend){
        //     alert("Friend is here");
        // }else{
        //     setStoreFriends([...storedFriends , currentFriend])
        // }
        const newEntry = {
        ...currentFriend,
        action: actionType,
        actionImg: actionImg,
        time: new Date().toLocaleString()
    }
        setStoredFriends([...storedFriends , newEntry])
        console.log(newEntry , storedFriends);
        
    }
    
    const data ={
        
        setStoredFriends ,
        storedFriends ,
        handleMarksAsClick
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    )
}
export default FriendContextProvider