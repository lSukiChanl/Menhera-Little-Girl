const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCFBICommand extends Command {
    constructor() {
        super({
            name: 'fbi',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*16);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐥 𝐅𝐁𝐈 𝐄𝐬𝐭𝐚 𝐀𝐪𝐮𝐢 𝐇𝐮𝐲𝐞 (✖╭╮✖) ¡¡¡𝗛𝘂𝘆𝗲!!! " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/FBI/FBI"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}