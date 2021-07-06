const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSmugCommand extends Command {
    constructor() {
        super({
            name: 'smug',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*68);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐏𝐫𝐞𝐬𝐮𝐦𝐢𝐞𝐧𝐝𝐨 ┐(︶▽︶)┌ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Smug/Smug"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}