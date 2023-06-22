import React, { useState } from 'react';

const Player = () => {
  
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan"
    }
  });

  const handleClick = () => {

    setGame({...game, player: {...game.player, name: 'Will'}
    });
  };

  return (
    <div onClick={handleClick}>Welcome {game.player.name}</div>

  );
};

export default Player;
