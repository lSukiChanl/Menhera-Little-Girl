const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCTsundereCommand extends Command {
    constructor() {
        super({
            name: 'tsundere',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*45);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " (҂ `з´ ) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Tsundere/Tsundere"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}