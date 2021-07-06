const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSadCommand extends Command {
    constructor() {
        super({
            name: 'sad',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*68);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐓𝐫𝐢𝐬𝐭𝐞 / 𝐃𝐞𝐜𝐚𝐢𝐝𝐚  (｡╯3╰｡) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sad/Sad"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}