const { Client, GatewayIntentBits} = require('discord.js');
require('dotenv/config');

const client = new Client({
	presence : { 
        status: 'online',
        afk: false,
        activities: [{
            name: 'in the fiery pits',
        }],
    },
	intents: 131071,
	partials: ['CHANNEL', 'GUILD_MEMBER','GUILD_MESSAGES','DIRECT_MESSAGES', 'GUILD_SCHEDULED_EVENT', 'MESSAGE', 'REACTION', 'USER']
});

client.on('ready', () =>{
    console.log('The bot is online!')
});

client.on('messageCreate', (msg) =>{
    if(msg.content.toLowerCase() === 'hello')
    	msg.channel.send('hello there')
});

client.on('messageCreate', msg => {
	if(msg.content.toLowerCase() === 'cooking'){
		client.users.fetch('296386289517723652', false).then((user) => {
			user.send('Bro now that I know what I am doing I can actually do some pretty fucking cool stuff now LMFAO');
			msg.channel.send('message sent to ' + user.username)
   		})
	}
});


client.login(process.env.TOKEN);