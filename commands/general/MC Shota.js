const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCShotaCommand extends Command {
    constructor() {
        super({
            name: 'shota',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*21);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐃𝐞𝐣𝐨 𝐚 𝐒𝐮 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐄𝐬𝐭𝐞 𝐏𝐞𝐪𝐮𝐞ñ𝐨 𝐒𝐡𝐨𝐭𝐚 \n 𝐂𝐮𝐢𝐝𝐚𝐦𝐞𝐥𝐨 𝐏𝐨𝐫 𝐅𝐚𝐯𝐨𝐫 (≧◡≦) ♡ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Shota/Shota"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}