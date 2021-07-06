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
        embed.setDescription(" "+msg.author.username + " 𝐒𝐢 𝐞𝐬 𝐓𝐫𝐚𝐩𝐢𝐭𝐨 𝐞𝐬 𝐌𝐚𝐬 𝐑𝐢𝐜𝐨 (≧◡≦) ♡ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Trap/Trap"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}