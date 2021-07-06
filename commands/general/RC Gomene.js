const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCGomeneCommand extends Command {
    constructor() {
        super({
            name: 'gomene',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*8);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐞 𝐌𝐮𝐜𝐡𝐢𝐬𝐢𝐦𝐨 (︶︹︺) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Gomene/Gomene"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}