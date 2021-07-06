const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICBirthdayCommand extends Command {
    constructor() {
        super({
            name: 'birthday',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*3);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐅𝐞𝐥𝐢𝐳 𝐂𝐮𝐦𝐩𝐥𝐞𝐚ñ𝐨𝐬 >/////<")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Birthday/Birthday"+NumMagic+".gif")
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " \n 𝐋𝐞 𝐃𝐞𝐬𝐞𝐚 𝐅𝐞𝐥𝐢𝐳 𝐂𝐮𝐦𝐩𝐥𝐞𝐚ñ𝐨𝐬 𝐚 "+member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Birthday/Birthday"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}