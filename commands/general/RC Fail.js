const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCFailCommand extends Command {
    constructor() {
        super({
            name: 'fail',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*8);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐇𝐚 𝐅𝐫𝐚𝐜𝐚𝐬𝐚𝐝𝐨 ｡ﾟ･ (>﹏<) ･ﾟ｡  " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Fail/Fail"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}