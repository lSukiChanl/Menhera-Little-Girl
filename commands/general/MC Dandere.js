const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCDandereCommand extends Command {
    constructor() {
        super({
            name: 'dandere',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐂𝐨𝐧 𝐌𝐮𝐜𝐡𝐨 𝐀𝐦𝐨𝐫 𝐮𝐧𝐚 𝐃𝐚𝐧𝐝𝐞𝐫𝐞 𝐏𝐚𝐫𝐚 𝐔𝐬𝐭𝐞𝐝 ლ(𝐨◡𝐨ლ)  " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Dandere/Dandere"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}