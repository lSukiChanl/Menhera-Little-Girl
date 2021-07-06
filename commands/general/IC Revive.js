const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICReviveCommand extends Command {
    constructor() {
        super({
            name: 'revive',
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
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + "\n 𝐍𝐨 𝐏𝐮𝐞𝐝𝐞𝐬 𝐑𝐞𝐯𝐢𝐯𝐢𝐫𝐭𝐞 𝐚 𝐓𝐢 𝐌𝐢𝐬𝐦𝐨 𝐒𝐢 𝐘𝐚 𝐄𝐬𝐭𝐚𝐬 𝐌𝐮𝐞𝐫𝐭𝐨 𝐗𝐃")
            embed.setImage(Clap[NumMagic])
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+member.user.username + " \n 𝐇𝐚 𝐒𝐢𝐝𝐨 𝐑𝐞𝐯𝐢𝐯𝐢𝐝@ 𝐎 𝐒𝐚𝐧𝐚𝐝@ 𝐏𝐨𝐫 : "+msg.author.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Revive/Revive"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}