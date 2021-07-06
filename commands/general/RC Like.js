const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCLikeCommand extends Command {
    constructor() {
        super({
            name: 'like',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*36);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐀𝐩𝐫𝐮𝐞𝐛𝐚 𝐄𝐬𝐭𝐨 ( ´ ▽ ` ).｡ｏ♡ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Like/Like"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}