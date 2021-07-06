const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCRunCommand extends Command {
    constructor() {
        super({
            name: 'run',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*74);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐓𝐢𝐫𝐨 𝐚 𝐂𝐨𝐫𝐫𝐞𝐫 {{ (>_<) }}  " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Run/Run"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}