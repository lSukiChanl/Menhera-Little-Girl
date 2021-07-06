const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCLoliCommand extends Command {
    constructor() {
        super({
            name: 'loli',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*51);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐃𝐞𝐣𝐨 𝐚 𝐒𝐮 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐄𝐬𝐭𝐚 𝐏𝐞𝐪𝐮𝐞ñ𝐚 𝐋𝐨𝐥𝐢 \n 𝐂𝐮𝐢𝐝𝐚𝐦𝐞𝐥𝐚 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 (≧◡≦) ♡ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Loli/Loli"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}