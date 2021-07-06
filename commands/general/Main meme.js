const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class MemeCommand extends Command {
    constructor() {
        super({
            name: 'meme',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*551);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription("𝐌𝐞𝐦𝐞 𝐑𝐚𝐧𝐝𝐨𝐦 ...")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Memes/Meme"+NumMagic+".jpg")
        return msg.channel.send(embed)
    }
}   