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
                description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
            }})
            )
        );
    }
}