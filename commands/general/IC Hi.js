const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICHiCommand extends Command {
    constructor() {
        super({
            name: 'hi',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*44);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐒𝐚𝐥𝐮𝐝𝐚𝐧𝐝𝐨 ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Hi/Hi"+NumMagic+".gif")
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + "\n 𝐄𝐬𝐭𝐚 𝐒𝐚𝐥𝐮𝐝𝐚𝐧𝐝𝐨 :  "+member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Hi/Hi"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}