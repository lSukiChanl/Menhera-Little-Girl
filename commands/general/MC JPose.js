const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCJPoseCommand extends Command {
    constructor() {
        super({
            name: 'jpose',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*27);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐏𝐨𝐬𝐚𝐧𝐝𝐨 𝐂𝐨𝐦𝐨 𝐮𝐧 𝐉𝐨𝐣𝐨 (*¯︶¯*) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/JPose/JPose"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}