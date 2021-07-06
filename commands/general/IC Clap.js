const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICClapCommand extends Command {
    constructor() {
        super({
            name: 'clap',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*49);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐀𝐩𝐥𝐚𝐮𝐝𝐢𝐞𝐧𝐝𝐨 ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Clap/Clap"+NumMagic+".gif")
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " \n 𝐋𝐞 𝐀𝐩𝐥𝐚𝐮𝐝𝐞 𝐀 : "+member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Clap/Clap"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}