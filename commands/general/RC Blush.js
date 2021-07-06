const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCBlushCommand extends Command {
    constructor() {
        super({
            name: 'blush',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*106);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐒𝐨𝐧𝐫𝐨𝐣𝐚𝐝@ (⁄ ⁄•⁄ω⁄•⁄ ⁄) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Blush/Blush"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}