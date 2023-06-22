import React ,{useState} from 'react'
import {GiSurprised, GiSuspicious} from 'react-icons/gi'



const Likes = () => {
    const [liked, setLiked] = useState(false);
  
    const handleLikeClick = () => {
      if (liked) {
        console.log('unliked');
      } else {
        console.log('liked');
      }
      setLiked(!liked);
    };
  
    
    return (
      <div>
        <button onClick={handleLikeClick}>
          {liked ? <GiSurprised /> : <GiSuspicious />}
        </button>
        <br></br>
        <br></br>
      </div>
    );
  };
export default Likes
