const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Cum } = require('./NSFW');

module.exports = class CumCommand extends Command {
    constructor() {
        super({
            name: 'cum',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
         })
    }
    execute(msg) {
        if (msg.channel.nsfw === true) {
            let member = msg.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \n𝐒𝐞 𝐡𝐚 𝐕𝐞𝐧𝐢𝐝𝐨 𝐒𝐨𝐥𝐨 ")
                embed.setImage(Cum[NumMagic])
                return msg.channel.send(embed)
            }
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + msg.author.username + " \n𝐒𝐞 𝐕𝐢𝐧𝐨 𝐞𝐧 "+ member.user.username + " ")
            embed.setImage(Cum[NumMagic])
            return msg.channel.send(embed)
        }else{
            return msg.reply(" 𝐏𝐚𝐫𝐚 𝐦𝐨𝐬𝐭𝐫𝐚𝐫 𝐞𝐬𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞𝐛𝐞𝐬 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖 ");
        }
    }
}