const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICWastedCommand extends Command {
    constructor() {
        super({
            name: 'wasted',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*17);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐖𝐀𝐒𝐓𝐄𝐃!!! Σ(°△°|||) ")
            embed.setImage(Clap[NumMagic])
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " 𝐖𝐀𝐒𝐓𝐄𝐃!!! "+member.user.username + " Σ(°△°|||) ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Wasted/Wasted"+NumMagic+".gif")
        return msg.channel.send(embed)
    }
}