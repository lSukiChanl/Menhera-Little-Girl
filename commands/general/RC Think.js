const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCThinkCommand extends Command {
    constructor() {
        super({
            name: 'think',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*49);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐏𝐞𝐧𝐬𝐚𝐫 （￣へ￣） ~~zzZ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Think/Think"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}