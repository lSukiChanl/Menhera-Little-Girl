const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const {  HandJob } = require('./NSFW');

module.exports = class HandJobCommand extends Command {
    constructor() {
        super({
            name: 'handjob',
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
                embed.setDescription(" " + msg.author.username + " \n𝐍𝐞𝐜𝐞𝐬𝐢𝐭𝐚 𝐔𝐧𝐚 𝐀𝐲𝐮𝐝𝐚 𝐌𝐚𝐧𝐮𝐚𝐥 ¿𝐂𝐚𝐧𝐭𝐢𝐝𝐚𝐭@𝐬? ")
                embed.setImage(HandJob[NumMagic])
                return msg.channel.send(embed)
            }
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + msg.author.username + " \n𝐄𝐬𝐭𝐚 𝐌𝐚𝐬𝐭𝐮𝐫𝐛𝐚𝐧𝐝𝐨 𝐚 "+ member.user.username + "  ")
            embed.setImage(HandJob[NumMagic])
            return msg.channel.send(embed)
        }else{
            return msg.reply(" 𝐏𝐚𝐫𝐚 𝐦𝐨𝐬𝐭𝐫𝐚𝐫 𝐞𝐬𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞𝐛𝐞𝐬 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖 ");
        }
    }
}