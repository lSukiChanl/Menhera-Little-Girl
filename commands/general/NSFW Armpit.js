const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Armpit } = require('./NSFW');

module.exports = class ArmpitCommand extends Command {
    constructor() {
        super({
            name: 'armpit',
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
                embed.setDescription(" " + msg.author.username + " \n𝐀𝐱𝐢𝐥𝐚𝐬 𝐞𝐰𝐞 ")
                embed.setImage(Armpit[NumMagic])
                return msg.channel.send(embed)
            }
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + msg.author.username + " \n𝐄𝐬𝐭𝐚 𝐎𝐜𝐮𝐩𝐚𝐧𝐝𝐨 𝐬𝐮𝐬 𝐀𝐱𝐢𝐥𝐚𝐬 𝐩𝐚𝐫𝐚 𝐒𝐚𝐭𝐢𝐬𝐟𝐚𝐜𝐞𝐫 𝐚 "+ member.user.username + "  ")
            embed.setImage(Armpit[NumMagic])
            return msg.channel.send(embed)
        }else{
            return msg.reply(" 𝐏𝐚𝐫𝐚 𝐦𝐨𝐬𝐭𝐫𝐚𝐫 𝐞𝐬𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞𝐛𝐞𝐬 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖 ");
        }
    }
}