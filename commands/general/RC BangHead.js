const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCBangHeadCommand extends Command {
    constructor() {
        super({
            name: 'banghead',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*17);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐄𝐬𝐭𝐚 𝐆𝐨𝐥𝐩𝐞𝐚𝐧𝐝𝐨 𝐥𝐚 𝐂𝐚𝐛𝐞𝐳𝐚 (o_O)!" )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Banghead/Banghead"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}