require('dotenv').config();

const { StaticAuthProvider } = require('@twurple/auth');
const { Bot, createBotCommand } = require('@twurple/easy-bot');

const clientId = process.env.CLIENT_ID;
const accessToken = process.env.TOKEN;
const authProvider = new StaticAuthProvider(clientId, accessToken);
new Bot({ authProvider, channels: ['letrefle2_0'],
    commands: [
        createBotCommand('letrefle', (message, { reply }) => {
            reply(`
            Le Trèfle 2.0 est une association reconnue d'intérêt général organisant des permanences d'écoute tous les soirs de 20h à 23h sur l'application Discord. 
            Les écoutes sont anonymes, confidentielles et gratuites. 
            https://letrefle.org/
            https://discord.gg/letrefle`);
        }),
    ]
});