const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCShotaCommand extends Command {
    constructor() {
        super({
            name: 'shota',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*21);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ๐๐๐ฃ๐จ ๐ ๐๐ฎ ๐๐ฎ๐ข๐๐๐๐จ ๐๐ฌ๐ญ๐ ๐๐๐ช๐ฎ๐รฑ๐จ ๐๐ก๐จ๐ญ๐ \n ๐๐ฎ๐ข๐๐๐ฆ๐๐ฅ๐จ ๐๐จ๐ซ ๐๐๐ฏ๐จ๐ซ (โงโกโฆ) โก " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Shota/Shota"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}