# Bot Batrr
Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army!

# Features

## Viewing and Managing Bots

### Bot Collection: 
In the BotCollection component, you can view all the available bots.
Adding Bots to Your Army: Click on a bot to add it to your army. Note that each bot can only be added to your army once.
### Your Bot Army: 
View and manage the bots you’ve added in the YourBotArmy component.
Modifying Your Army
### Release a Bot:
To remove a bot from your army, click on the bot within the YourBotArmy component. The bot will be returned to the BotCollection.
Discharge a Bot: To permanently remove a bot from your army, click the button marked with an "x" next to the bot.



# Usage instructions
Link to live site is  https://phase-2-bot-batrr-code-challenge.vercel.app/

## Install Dependencies
Before running the application, make sure you have all necessary dependencies installed. In the project directory, run **npm install**
This command installs the packages listed in package.json.

## Start the Backend
The application uses a JSON server to simulate a backend. To start it, use:

## json-server --watch db.json
This command starts the JSON server and watches for changes in the db.json file.
Default Port: By default, the server runs on http://localhost:3000.
Purpose: This server provides the bot data used by the frontend and handles requests related to bot data.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Stopping the Servers
- Frontend: Press Ctrl + C in the terminal where npm start is running to stop the React development server.
- Backend: Press Ctrl + C in the terminal where json-server is running to stop the JSON server.

By following these instructions, you should be able to successfully run and interact with the Bot Battlr application. If you encounter any issues, check the console for error messages and refer to the documentation for troubleshooting tips.








