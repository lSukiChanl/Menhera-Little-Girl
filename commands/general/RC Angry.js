const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCAngryCommand extends Command {
    constructor() {
        super({
            name: 'angry',
            aliases: [],
            category: '',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*79);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐄𝐧𝐨𝐣𝐚𝐝@ (╬ Ò﹏Ó) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Angry/Angry"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}