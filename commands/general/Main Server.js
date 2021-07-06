const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');
const config = require('../../config');

module.exports = class ServerCommand extends Command {
   constructor() {
      super({
         name: 'server',
         aliases: [],
         category: 'general',
         priority: 9,
         permLvl: 0
      })
   }
   execute(msg) {
    let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setAuthor("💜 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 💜 \n "+msg.author.username+" " + 
                        "\n 𝐕𝐢𝐬𝐢𝐭𝐚 𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 : https://discord.gg/BRq5QGw", msg.author.avatarURL)
        embed.setTitle("🎀 🎀 🎀 🎀 🎀 𝐕𝐈𝐒𝐈𝐓𝐀𝐍𝐎𝐒 🎀 🎀 🎀 🎀 🎀")
        embed.setThumbnail("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/MenheraDevil001.png")
        embed.addField(" 𝐀𝐛𝐚𝐣𝐨 𝐔𝐑𝐋 (𝐒𝐢 𝐧𝐨 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐞𝐥 𝐋𝐢𝐧𝐤) ", ""+
            "\n https://discord.gg/BRq5QGw " )
        embed.setURL("https://discord.gg/BRq5QGw")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Server/Servidor.gif")
        embed.setFooter(" 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ config.author +"  "+ config.version +" ")
        embed.setTimestamp()
        msg.reply(" 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐕𝐨𝐭𝐚𝐫𝐦𝐞 :heartpulse: ");
    return msg.author.send(embed)
   }
}