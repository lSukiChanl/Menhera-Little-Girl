const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCTeeheeCommand extends Command {
    constructor() {
        super({
            name: 'teehee',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*21);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " \n 𝐀𝐜𝐭𝐮𝐚 𝐝𝐞 𝐅𝐨𝐫𝐦𝐚 𝐓𝐨𝐧𝐭𝐚 𝐏𝐚𝐫𝐚 𝐝𝐞𝐬𝐯𝐢𝐚𝐫 𝐥𝐚 𝐀𝐭𝐞𝐧𝐜𝐢𝐨𝐧 " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Teehee/Teehee"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}