const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCDabCommand extends Command {
    constructor() {
        super({
            name: 'dab',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*6);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐇𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐮𝐧 𝐃𝐚𝐛 (/ =ω=)/  " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Dab/Dab"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}