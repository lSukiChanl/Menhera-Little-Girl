const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCDisgustCommand extends Command {
    constructor() {
        super({
            name: 'disgust',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*26);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐃𝐢𝐬𝐠𝐮𝐬𝐭𝐚𝐝@ (＞﹏＜)  " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Disgust/Disgust"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}