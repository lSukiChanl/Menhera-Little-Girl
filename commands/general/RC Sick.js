const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSickCommand extends Command {
    constructor() {
        super({
            name: 'sick',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*25);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐄𝐧𝐟𝐞𝐫𝐦@ ｡ﾟ･ (>﹏<) ･ﾟ｡  " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sick/Sick"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}