const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');
const config = require('../../config');

module.exports = class SayCommand extends Command {
    constructor() {
        super({
            name: 'say',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        msg.channel.send(msg.content.slice(5));
        msg.delete()
        .catch(error =>
            msg.reply(({embed: {
                color: 15158332,
                description: "šššš ššššššššš ššššššššššššš šššššššš \nššš šššš ššššššššššššš"
            }})
            )
        );
    }
}