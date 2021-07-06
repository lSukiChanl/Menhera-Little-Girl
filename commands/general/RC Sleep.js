const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSleepCommand extends Command {
    constructor() {
        super({
            name: 'sleep',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*59);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮𝐞ñ𝐧𝐨 𝐨 𝐘𝐚 𝐬𝐞 𝐃𝐮𝐫𝐦𝐢𝐨 (￣ρ￣)..zzZZ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sleep/Sleep"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}