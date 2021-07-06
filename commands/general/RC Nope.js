const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCNopeCommand extends Command {
    constructor() {
        super({
            name: 'nope',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*36);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ¡¡¡𝐍𝐨𝐩𝐞!!! ( ´ ▽ ` ).｡ｏ✖ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Nope/Nope"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}