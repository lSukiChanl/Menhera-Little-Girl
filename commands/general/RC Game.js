const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCGameCommand extends Command {
    constructor() {
        super({
            name: 'game',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*42);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ๐๐ ๐๐ฎ๐ฌ๐จ ๐ ๐๐ฎ๐ ๐๐ซ ๏ผผ(โงโฝโฆ)๏ผ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Game/Game"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}