const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCYaoiCommand extends Command {
    constructor() {
        super({
            name: 'yaoi',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*40);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ๐๐ง๐ข๐ข-๐๐ก๐๐ง ๐๐ซ๐๐ฌ ๐ฎ๐ง ๐๐ฎ๐๐ซ๐๐จ \n ๐๐๐ซ๐ซ๐๐ซ๐ ๐ฅ๐จ๐ฌ ๐๐ฃ๐จ๐ฌ  (>ไบบ<) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yaoi/Yaoi"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}