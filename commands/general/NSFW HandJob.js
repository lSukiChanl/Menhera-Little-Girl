const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const {  HandJob } = require('./NSFW');

module.exports = class HandJobCommand extends Command {
    constructor() {
        super({
            name: 'handjob',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
         })
    }
    execute(msg) {
        if (msg.channel.nsfw === true) {
            let member = msg.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \nššššš¬š¢š­š šš§š šš²š®šš ššš§š®šš„ Āæššš§š­š¢ššš­@š¬? ")
                embed.setImage(HandJob[NumMagic])
                return msg.channel.send(embed)
            }
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + msg.author.username + " \nšš¬š­š ššš¬š­š®š«ššš§ššØ š "+ member.user.username + "  ")
            embed.setImage(HandJob[NumMagic])
            return msg.channel.send(embed)
        }else{
            return msg.reply(" ššš«š š¦šØš¬š­š«šš« šš¬š ššØš§š­šš§š¢ššØ ššššš¬ šš¬š­šš« šš§ š®š§ ššš§šš„ šššš ");
        }
    }
}