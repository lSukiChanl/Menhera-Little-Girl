const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCFacepalmCommand extends Command {
    constructor() {
        super({
            name: 'facepalm',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*10);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐃𝐞𝐬𝐞𝐩𝐜𝐢𝐨𝐧𝐚𝐝@ (︶︹︺) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Facepalm/Facepalm"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}