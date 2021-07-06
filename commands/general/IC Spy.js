const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICSpyCommand extends Command {
    constructor() {
        super({
            name: 'spy',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*19);
        NumMagic = NumMagic + 1;
            if (!member){return msg.channel.send(" 𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐨 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 𝐏𝐞𝐫𝐨 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐀𝐥𝐠𝐮𝐢𝐞𝐧 ");}
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + "\n 𝐄𝐬𝐭𝐚 𝐄𝐬𝐩𝐢𝐚𝐧𝐝𝐨 𝐀 : "+member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Spy/Spy"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}