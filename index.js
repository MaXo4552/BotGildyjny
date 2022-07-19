const Discord = require('discord.js');

const client = new Discord.Client();

client.once('gotowy', () => {
    console.log('MetroBot gotowy');
})

client.login('OTk4ODU4MTgxNDk5NDQxMTUy.GAtCiT.r0_bEFEul8KupMqxhOle5VZq3rKdhT8sq8Ep1A')