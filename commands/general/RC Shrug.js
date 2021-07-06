const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCShrugCommand extends Command {
    constructor() {
        super({
            name: 'shrug',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*12);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐍𝐨 𝐒𝐚𝐛𝐞 𝐎 𝐍𝐨 𝐋𝐞 𝐈𝐦𝐩𝐨𝐫𝐭𝐚 ┐(￣ヘ￣)┌ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Shrug/Shrug"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}