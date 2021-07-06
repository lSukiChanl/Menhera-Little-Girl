const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Trap18 } = require('./NSFW');

module.exports = class TrapCommand extends Command {
    constructor() {
        super({
            name: 'trap18',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
         })
    }
    execute(msg) {
        if (msg.channel.nsfw === true) {
            let member = msg.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*151);
            let NumMagicB = Math.floor(Math.random()*33);
            if (!member){
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \n𝐒𝐢 𝐞𝐬 𝐓𝐫𝐚𝐩𝐢𝐭𝐨 𝐞𝐬 𝐦𝐚𝐬 𝐑𝐢𝐜𝐨 𝐞𝐰𝐞 ")
                embed.setImage(Trap18[NumMagic])
                return msg.channel.send(embed)
            }else{
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \n𝐏𝐚𝐫𝐚 𝐪𝐮𝐞 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞 𝐞𝐬𝐭𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐨 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐍𝐚𝐝𝐢𝐞 >.< ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagicB+".gif")
                return msg.channel.send(embed)
            }
        }else{
            return msg.reply(" 𝐏𝐚𝐫𝐚 𝐦𝐨𝐬𝐭𝐫𝐚𝐫 𝐞𝐬𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞𝐛𝐞𝐬 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖 ");
        }
    }
}