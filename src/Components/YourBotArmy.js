import React from "react";
import BotItem from "./BotItem";

function YourBotArmy({botsArmy,onremoveBot,deleteBot}) {
  return (
    <div className="botContainer">
        {botsArmy.map((bot) => (
    <BotItem bot={bot} key={bot.id} clickedBotToArmy={onremoveBot} deleteBot={deleteBot} />
  ))}
    </div>
  );
}

export default YourBotArmy;
