import React from "react";

const botTypeClasses = {
  Assault: "fa-solid fa-jet-fighter",
  Defender: "fa-solid fa-shield",
  Support: "fa-solid fa-suitcase-medical",
  Medic: "fa-solid fa-truck-medical",
  Witch: "fa-solid fa-wand-magic-sparkles",
  Captain: "fa-regular fa-star"
};

function BotItem({ bot,alt, clickedBotToArmy,deleteBot }) {
  return (
    <div className="card" key={bot.id}  onClick={() => clickedBotToArmy(bot.id)}>
            <div>
                <img src={bot.avatar_url} alt={alt} className="card-image" />
            </div>
            <div className="content">
                <div className="card-content">
                    <h2 className="card-title">{bot.name}<i className={botTypeClasses[bot.bot_class]}></i></h2>
                    <p className="card-description">{bot.catchphrase}</p>
                </div>
                <div className="card-icons">
                    <span>
                        <i className="fa-solid fa-heart-pulse" style={{ color: "#526584" }}></i>
                        {bot.health}
                    </span>
                    <span>
                        <i className="fa-solid fa-bolt"></i>
                        {bot.damage}
                    </span>
                    <span>
                        <i className="fa fa-shield" aria-hidden="true"></i>
                        {bot.armor}
                    </span>
                    <button  onClick={() => deleteBot(bot)} >x</button>
                </div>
            
            </div>
        </div>
  );
}

export default BotItem;

