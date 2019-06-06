
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

var oyun = [
        "YouTube > Mühendis Bey ile Mühendis Hanım ",
        "Instagram > @muhendisbeyilemuhendishanim ",
	"DLive.tv/muhendisbeyilhanim ",
	"Mühendis BOT  " +bot.guilds.size+ "  sunucuda  " + bot.users.size +" kullanıcıya hizmet veriyor!",
	"Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :)"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        bot.user.setGame(oyun[random], "https://www.twitch.tv/muhendisbeymuhendishanim");
        }, 2 * 2500);
        
bot.login(process.env.BOT_TOKEN);
