const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCDereCommand extends Command {
    constructor() {
        super({
            name: 'dere',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " Āæšš®š¢šš«šš¬ ššššš« š„šØš¬ šš¢š©šØš¬ šš ššš«š šŖš®š ššš²? \nššŖš®Ć­ š„š ššš¬š©š®šš¬š­š Źā¢Ģį“„ā¢ĢŹć£  " + NumMagic)
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Dere/Dere1.jpg");
        return msg.channel.send(embed)
    }
}