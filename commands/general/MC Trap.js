const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCTrapCommand extends Command {
    constructor() {
        super({
            name: 'trap',
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
        embed.setDescription(" "+msg.author.username + " ๐๐ข ๐๐ฌ ๐๐ซ๐๐ฉ๐ข๐ญ๐จ ๐๐ฌ ๐๐๐ฌ ๐๐ข๐๐จ (โงโกโฆ) โก " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Trap/Trap"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}