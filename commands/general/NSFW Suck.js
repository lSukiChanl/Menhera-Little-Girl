const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Masturbate, Suck } = require('./NSFW');

module.exports = class SuckCommand extends Command {
    constructor() {
        super({
            name: 'suck',
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
                embed.setDescription(" " + msg.author.username + " \n𝐒𝐞 𝐞𝐬𝐭𝐚 𝐃𝐚𝐧𝐝𝐨 𝐏𝐥𝐚𝐜𝐞𝐫 𝐚 𝐬𝐢 𝐌𝐢𝐬𝐦@ \n𝐖𝐨𝐨𝐖 𝐏𝐞𝐫𝐨 𝐪𝐮𝐞 𝐄𝐥𝐚𝐬𝐭𝐢𝐜𝐢𝐝𝐚𝐝 ")
                embed.setImage(Masturbate[NumMagic])
                return msg.channel.send(embed)
            }
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + msg.author.username + " \n𝐋𝐞 𝐄𝐬𝐭𝐚 𝐃𝐚𝐧𝐝𝐨 𝐮𝐧𝐚 𝐂𝐡𝐮𝐩𝐚𝐝𝐢𝐭𝐚 𝐚 "+ member.user.username + " ")
            embed.setImage(Suck[NumMagic])
            return msg.channel.send(embed)
        }else{
            return msg.reply(" 𝐏𝐚𝐫𝐚 𝐦𝐨𝐬𝐭𝐫𝐚𝐫 𝐞𝐬𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞𝐛𝐞𝐬 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖 ");
        }
    }
}