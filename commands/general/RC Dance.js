const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCDanceCommand extends Command {
    constructor() {
        super({
            name: 'dance',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*71);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐁𝐚𝐢𝐥𝐚𝐫 (≧ω≦) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Dance/Dance"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}