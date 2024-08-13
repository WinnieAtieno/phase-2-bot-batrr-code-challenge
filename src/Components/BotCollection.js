import React from "react";
import BotItem from "./BotItem";

function BotCollection({bots, clickedBotToArmy, deleteBot}) {
  return (
    <div className="botContainer">      
        {bots.map((bot) => (
          <BotItem bot={bot} key={bot.id} clickedBotToArmy={clickedBotToArmy} deleteBot={deleteBot} />
        ))}
      
    </div>
  );
}

export default BotCollection;
