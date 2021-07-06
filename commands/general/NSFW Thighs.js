const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Armpit, BoobJob, Cum, Foot, Fuck, Futanari, HandJob, Hentai, Loli18, Masturbate, Shota18, Socks, Suck, Thighs, Trap18, Yaoi18, Yuri18 } = require('./NSFW');

module.exports = class ThighsCommand extends Command {
    constructor() {
        super({
            name: 'thighs',
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
            let NumMagicB = Math.floor(Math.random()*33);
            if (!member){
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \n𝐏𝐚𝐫𝐚 𝐥𝐨𝐬 𝐅𝐞𝐭𝐢𝐜𝐡𝐢𝐬𝐭𝐚𝐬 𝐝𝐞 𝐥𝐚𝐬 𝐏𝐢𝐞𝐫𝐧𝐚𝐬 𝐞𝐰𝐞 ")
                embed.setImage(Thighs[NumMagic])
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