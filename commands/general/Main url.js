const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class UrlCommand extends Command {
    constructor() {
        super({
            name: 'url',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }

    execute(msg) {
        msg.delete().catch(error =>
            msg.reply(({embed: {
                color: 15158332,
                description: "šššš ššššššššš ššššššššššššš šššššššš \nššš šššš ššššššššššššš"
            }})
            )
        );  
        let embed = new MessageEmbed()
            if (msg.content.slice(5) === ''){
                embed.setColor('#D57DC1')
                embed.setImage('https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/URL/URL.png')
            return msg.channel.send(embed)
            }
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + " šš¢šš: \n ššš¬š©šš­šØ š„šš¬ ššš š„šš¬ ššš„ ššš«šÆš¢ššØš«, ššš«šØ ššššš¢š«š¦šØ š¦š¢ šš®š­šØš«š¢ššš šš­š¢š„š¢š³šš§ššØ šš„ ššØš­ ššš«š šš§šÆš¢šš« šš¬š­š šš¦šš šš§")
            embed.setImage(msg.content.slice(5))
        return msg.channel.send(embed)
    }
}