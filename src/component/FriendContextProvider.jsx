
import { createContext } from "react"
import { useState } from "react";
import { toast } from "react-toastify";
export const FriendContext = createContext();

const FriendContextProvider = ({children}) => {
    const [storedFriends , setStoredFriends] = useState([]);

    const handleActionClick = (currentFriend , actionType, actionImg) => {
        if (actionType === 'call'){
            toast.success(`Call with ${currentFriend.name}`)
        }
        if (actionType === 'text'){
            toast.success(`Text with ${currentFriend.name}`)
        }
        if (actionType === 'video'){
            toast.success(`Video  with ${currentFriend.name}`)
        }

        handleMarksAsClick(currentFriend , actionType, actionImg);
    }

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
        handleMarksAsClick ,
        handleActionClick
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    )
}
export default FriendContextProvider