const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCCookCommand extends Command {
    constructor() {
        super({
            name: 'cook',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*20);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐂𝐨𝐜𝐢𝐧𝐚𝐧𝐝𝐨 ( ´ ▽ ` ).｡ｏ♡ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Cook/Cook"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}