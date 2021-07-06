const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCKuudereCommand extends Command {
    constructor() {
        super({
            name: 'kuudere',
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
        embed.setDescription(" "+msg.author.username + " 𝐂𝐨𝐧 𝐌𝐮𝐜𝐡𝐨 𝐀𝐦𝐨𝐫 𝐮𝐧𝐚 𝐊𝐮𝐮𝐝𝐞𝐫𝐞 𝐏𝐚𝐫𝐚 𝐔𝐬𝐭𝐞𝐝 ლ(o◡oლ) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Kuudere/Kuudere"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}