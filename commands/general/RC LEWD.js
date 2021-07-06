const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCLEWDCommand extends Command {
    constructor() {
        super({
            name: 'lewd',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*59);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐝𝐞 𝐋𝐚𝐬𝐜𝐢𝐯@ (⁄ ⁄•⁄ω⁄•⁄ ⁄) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/LEWD/LEWD"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}