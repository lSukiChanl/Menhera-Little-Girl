const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Foot } = require('./NSFW');

module.exports = class FootCommand extends Command {
    constructor() {
        super({
            name: 'foot',
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
                embed.setDescription(" " + msg.author.username + " \n𝐏𝐚𝐭𝐚𝐬 𝐞𝐰𝐞 ")
                embed.setImage(Foot[NumMagic])
                return msg.channel.send(embed)
            }
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + msg.author.username + " \n𝐄𝐬𝐭𝐚 𝐔𝐭𝐢𝐥𝐢𝐳𝐚𝐧𝐝𝐨 𝐬𝐮𝐬 𝐏𝐢𝐞𝐬 𝐩𝐚𝐫𝐚 𝐃𝐚𝐫𝐥𝐞 𝐏𝐥𝐚𝐜𝐞𝐫 𝐚 "+ member.user.username + " ")
            embed.setImage(Foot[NumMagic])
            return msg.channel.send(embed)
        }else{
            return msg.reply(" 𝐏𝐚𝐫𝐚 𝐦𝐨𝐬𝐭𝐫𝐚𝐫 𝐞𝐬𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞𝐛𝐞𝐬 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖 ");
        }
    }
}