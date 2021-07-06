const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSipCommand extends Command {
    constructor() {
        super({
            name: 'sip',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*40);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐁𝐞𝐛𝐢𝐞𝐧𝐝𝐨 𝐝𝐞 𝐅𝐨𝐫𝐦𝐚 𝐀𝐭𝐞𝐧𝐭𝐚 ٩(◕‿◕)۶ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sip/Sip"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}