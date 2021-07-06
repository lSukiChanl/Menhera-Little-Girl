const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCPrayCommand extends Command {
    constructor() {
        super({
            name: 'pray',
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
        embed.setDescription(" "+msg.author.username + " 𝐋𝐞 𝐄𝐬𝐭𝐚 𝐑𝐞𝐳𝐚𝐧𝐝𝐨 𝐚 𝐃𝐢𝐨𝐬𝐢𝐭𝐨 (𝐀𝐦𝐞𝐧) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Pray/Pray"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}