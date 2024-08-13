import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotContainer() {
  
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
// fetching data
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []); //ensures data is fetched once

  function addBotToYourArmy  (id)  {
    const botToAdd = bots.find((bot) => bot.id === id);
    if (botToAdd && !botArmy.find((b) => b.id === id)) {
        setBotArmy([...botArmy, botToAdd]);
    }
};

//  remove a bot from the botArmy based on its id
function removeBotFromMyArmy (botId) {
    // Update the botArmy state by filtering out the bot with the same id
    setBotArmy(prevBotArmy => prevBotArmy.filter((bot) => bot.id !== botId));
  };

  // delete clicked bot from database and remove from my bot army list if it is in it and update the bots list
  const deleteBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        removeBotFromMyArmy(bot);
        setBots(bots.filter((b) => b.id !== bot.id));
      }
      );
  }

  return (
    <>
      <YourBotArmy botsArmy={botArmy} onremoveBot={removeBotFromMyArmy} deleteBot={deleteBot} />
      <BotCollection bots={bots} clickedBotToArmy={addBotToYourArmy} deleteBot = {deleteBot} />
    </>
  );
}

export default BotContainer;
