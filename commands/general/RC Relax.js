const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCRelaxCommand extends Command {
    constructor() {
        super({
            name: 'relax',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*16);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ππ ππ¬π­π πππ₯ππ£ππ§ππ¨ οΌοΏ£γΈοΏ£οΌ ~~zzZ  " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Relax/Relax"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}