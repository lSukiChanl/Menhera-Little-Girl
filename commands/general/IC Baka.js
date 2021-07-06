const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICBakkaCommand extends Command {
    constructor() {
        super({
            name: 'baka',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*32);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐄𝐬 𝐮𝐧 𝐈𝐝𝐢𝐨𝐭𝐚")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagic+".gif")            
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " \n 𝐋𝐞 𝐃𝐢𝐣𝐨 𝐈𝐝𝐢𝐨𝐭𝐚 𝐚 "+member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}