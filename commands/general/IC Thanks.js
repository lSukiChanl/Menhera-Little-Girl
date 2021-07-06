const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICThanksCommand extends Command {
    constructor() {
        super({
            name: 'thanks',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*6);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐢𝐝𝐨 𝐂𝐨𝐧 𝐞𝐥 𝐝𝐞 𝐀𝐫𝐫𝐢𝐛𝐚 ")
            embed.setImage(Clap[NumMagic])
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + "\n 𝐋𝐞 𝐃𝐚 𝐥𝐚𝐬 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐀 : "+member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Thanks/Thanks"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}