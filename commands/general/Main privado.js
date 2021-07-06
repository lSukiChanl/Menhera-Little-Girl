const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');
const config = require('../../config');

module.exports = class PingCommand extends Command {
    constructor() {
        super({
            name: 'privado',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor("💜 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 "+msg.author.username+" 💜" + 
                            "\n 𝐕𝐢𝐬𝐢𝐭𝐚 𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 : https://discord.gg/BRq5QGw", msg.author.avatarURL)
            embed.setTitle("🎀 🎀 🎀 🎀 🎀 𝐂𝐚𝐢𝐬𝐭𝐞 🎀 🎀 🎀 🎀 🎀")
            embed.setThumbnail("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/MenheraDevil001.png")
            embed.setURL("https://discord.gg/BRq5QGw")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Privado/Circulo.jpg")
            embed.setFooter(" 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ config.author +"  "+ config.version +" ")
            embed.setTimestamp()
            msg.reply(" 𝐓𝐞 𝐀𝐜𝐚𝐛𝐨 𝐝𝐞 𝐄𝐧𝐯𝐢𝐚𝐫 𝐮𝐧𝐚 𝐒𝐨𝐫𝐩𝐫𝐞𝐬𝐚 𝐚𝐥 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 :heartpulse: ");
        return msg.author.send(embed)
    }
}