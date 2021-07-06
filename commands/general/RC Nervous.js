const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCNervousCommand extends Command {
    constructor() {
        super({
            name: 'nervous',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*28);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐍𝐞𝐫𝐯𝐢𝐨𝐬𝐨 {{ (>_<) }} " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Nervous/Nervous"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}