const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSadCommand extends Command {
    constructor() {
        super({
            name: 'sad',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*68);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ๐๐ฌ๐ญ๐ ๐๐ซ๐ข๐ฌ๐ญ๐ / ๐๐๐๐๐ข๐๐  (๏ฝกโฏ3โฐ๏ฝก) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sad/Sad"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}