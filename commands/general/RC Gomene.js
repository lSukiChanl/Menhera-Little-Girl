const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCGomeneCommand extends Command {
    constructor() {
        super({
            name: 'gomene',
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
        embed.setDescription(" "+msg.author.username + " đđ¨ đđĸđđ§đ­đ đđŽđđĄđĸđŦđĸđĻđ¨ (ī¸ļī¸šī¸ē) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Gomene/Gomene"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}