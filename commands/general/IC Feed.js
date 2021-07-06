const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICFeedCommand extends Command {
    constructor() {
        super({
            name: 'feed',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*85);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐂𝐨𝐦𝐢𝐞𝐧𝐝𝐨 ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Feed/Feed"+NumMagic+".gif");
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " \n 𝐀𝐥𝐢𝐦𝐞𝐧𝐭𝐨 𝐀 : "+ member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Feed/Feed"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}