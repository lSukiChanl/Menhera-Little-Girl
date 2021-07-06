const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSmileCommand extends Command {
    constructor() {
        super({
            name: 'smile',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*169);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐒𝐨𝐧𝐫𝐢𝐞𝐧𝐝𝐨 ¿𝐏𝐨𝐫 𝐐𝐮𝐞 𝐒𝐞𝐫𝐚? (o◕‿◕o) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Smile/Smile"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}