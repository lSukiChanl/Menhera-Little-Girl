const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Fuck, Masturbate } = require('./NSFW');

module.exports = class FuckCommand extends Command {
    constructor() {
        super({
            name: 'fuck',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
         })
    }
    execute(msg) {
        if (msg.channel.nsfw === true) {
            let member = msg.mentions.members.first(); 
            let NumMagicF = Math.floor(Math.random()*61);
            let NumMagicM = Math.floor(Math.random()*51);
            if (!member){
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \n𝐄𝐬𝐭𝐚 𝐇𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐞𝐥 𝐀𝐮𝐭𝐨𝐃𝐞𝐥𝐢𝐜𝐢𝐨𝐬𝐨 𝐞𝐰𝐞 ")
                embed.setImage(Masturbate[NumMagicM])
                return msg.channel.send(embed)
            }
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + msg.author.username + " \n𝐒𝐞 𝐞𝐬𝐭𝐚 𝐅𝐨𝐥𝐥𝐚𝐧𝐝𝐨 𝐚 "+ member.user.username + " 𝗢///𝗢 ")
            embed.setImage(Fuck[NumMagicF])
            return msg.channel.send(embed)
        }else{
            return msg.reply(" 𝐏𝐚𝐫𝐚 𝐦𝐨𝐬𝐭𝐫𝐚𝐫 𝐞𝐬𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞𝐛𝐞𝐬 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖 ");
        }
    }
}