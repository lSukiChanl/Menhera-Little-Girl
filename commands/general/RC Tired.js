const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCTiredCommand extends Command {
    constructor() {
        super({
            name: 'tired',
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
        embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐀𝐠𝐨𝐭𝐚𝐝𝐨 (x . x) ~~zzZ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Tired/Tired"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}