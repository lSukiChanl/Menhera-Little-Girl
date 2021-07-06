const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCDereCommand extends Command {
    constructor() {
        super({
            name: 'dere',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐒𝐚𝐛𝐞𝐫 𝐥𝐨𝐬 𝐓𝐢𝐩𝐨𝐬 𝐝𝐞 𝐃𝐞𝐫𝐞 𝐪𝐮𝐞 𝐇𝐚𝐲? \n𝐀𝐪𝐮í 𝐥𝐚 𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 ʕ•́ᴥ•̀ʔっ  " + NumMagic)
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Dere/Dere1.jpg");
        return msg.channel.send(embed)
    }
}