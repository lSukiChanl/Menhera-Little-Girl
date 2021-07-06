const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICLaughCommand extends Command {
    constructor() {
        super({
            name: 'laugh',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*70);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐄𝐬𝐭𝐚 𝐑𝐢𝐞𝐧𝐝𝐨")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Laugh/Laugh"+NumMagic+".gif")
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + "\n 𝐒𝐞 𝐁𝐮𝐫𝐥𝐚 𝐃𝐞 : "+member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Laugh/Laugh"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}