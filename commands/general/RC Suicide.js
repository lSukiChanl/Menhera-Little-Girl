const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSuicideCommand extends Command {
    constructor() {
        super({
            name: 'suicide',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*55);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.addField(" 💖 𝐕𝐚𝐥𝐨𝐫𝐚𝐭𝐞 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 💖 ", "𝐋𝐚 𝐯𝐢𝐝𝐚 𝐞𝐬 𝐇𝐞𝐫𝐦𝐨𝐬𝐚 𝐲 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐂𝐡𝐚𝐧 𝐓𝐞 𝐐𝐮𝐢𝐞𝐫𝐞 𝐌𝐮𝐜𝐡𝐨 \n " + msg.author.username + " 𝐔𝐧 𝐁𝐞𝐬𝐢𝐭𝐨 𝐏𝐚𝐫𝐚 𝐓𝐢 \n (人´3｀)⌒♡ 𝗰𝗵𝘂𝘂♥  ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Cuddle/Cuddle"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}