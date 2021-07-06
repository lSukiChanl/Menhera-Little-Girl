const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCHappyCommand extends Command {
    constructor() {
        super({
            name: 'happy',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*104);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐅𝐞𝐥𝐢𝐳 ＼(≧▽≦)／ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Happy/Happy"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}