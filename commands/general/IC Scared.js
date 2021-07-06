const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class ICScaredCommand extends Command {
    constructor() {
        super({
            name: 'scared',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*72);
        NumMagic = NumMagic + 1;
        if (!member){
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " 𝐓𝐢𝐞𝐧𝐞 𝐌𝐢𝐞𝐝𝐨 ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Scared/Scared"+NumMagic+".gif");
            return msg.channel.send(embed)
        }
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " \n 𝐋𝐞 𝐓𝐢𝐞𝐧𝐞 𝐌𝐢𝐞𝐝𝐨 𝐀 : "+ member.user.username + " ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Scared/Scared"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}