const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSecretCommand extends Command {
    constructor() {
        super({
            name: 'secret',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*8);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐆𝐮𝐚𝐫𝐝𝐚𝐧𝐝𝐨 𝐮𝐧 𝐒𝐞𝐜𝐫𝐞𝐭𝐨 (>人<) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Secret/Secret"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}