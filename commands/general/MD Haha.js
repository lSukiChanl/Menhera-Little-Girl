const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class MDHahaCommand extends Command {
    constructor() {
        super({
            name: 'mdhaha',
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
                description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
            }})
            )
        );
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+ msg.author.username +" 𝐒𝐞 𝐞𝐬𝐭𝐚 𝐑𝐢𝐞𝐧𝐝𝐨")
        embed.setImage('https://cdn.discordapp.com/emojis/631035774099521536.png')
        return msg.channel.send(embed)
    }
}