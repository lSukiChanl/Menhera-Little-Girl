const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCVomitCommand extends Command {
    constructor() {
        super({
            name: 'vomit',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*25);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐀𝐜𝐚𝐛𝐚 𝐝𝐞 𝐕𝐨𝐦𝐢𝐭𝐚𝐫 (￣□￣」) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Vomit/Vomit"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}