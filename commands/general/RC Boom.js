const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCBoomCommand extends Command {
    constructor() {
        super({
            name: 'boom',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*28);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ยกยก๐๐๐๐๐๐!!! ((โฌโฃ๏นโข)) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Boom/Boom"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}