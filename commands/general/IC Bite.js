const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICBiteCommand extends Command {
    constructor() {
        super({
            name: 'bite',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*35);
        NumMagic = NumMagic + 1;
            if (!member){return msg.channel.send(" 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐀𝐥𝐠𝐮𝐢𝐞𝐧 ");}
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+member.user.username + " 𝐅𝐮𝐞 𝐌𝐨𝐫𝐝𝐢𝐝@ 𝐏𝐨𝐫 "+ msg.author.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Bite/Bite"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}