const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCYaoiCommand extends Command {
    constructor() {
        super({
            name: 'yaoi',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*40);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 𝐄𝐫𝐞𝐬 𝐮𝐧 𝐏𝐮𝐞𝐫𝐜𝐨 \n 𝐂𝐞𝐫𝐫𝐚𝐫𝐞 𝐥𝐨𝐬 𝐎𝐣𝐨𝐬  (>人<) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yaoi/Yaoi"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}