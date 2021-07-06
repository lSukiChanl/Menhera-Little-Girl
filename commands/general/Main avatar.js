const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');
const config = require('../../config');

module.exports = class AvatarCommand extends Command {
    constructor() {
        super({
            name: 'avatar',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let usuario = msg.mentions.members.first() || msg.member; 
        let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription("𝐀𝐯𝐚𝐭𝐚𝐫 𝐃𝐞 : \n"+ usuario.user.username)
            embed.setImage(usuario.user.avatarURL()+"?size=1024")
            embed.addField("𝐀𝐯𝐚𝐭𝐚𝐫 𝐏𝐞𝐝𝐢𝐝𝐨 𝐏𝐨𝐫 : \n"+msg.author.username+"", "\n [ --- 𝗔𝘃𝗮𝘁𝗮𝗿 𝗨𝗥𝗟 ---]("+usuario.user.avatarURL()+"?size=1024)")
            embed.setFooter(" 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ config.author)
            embed.setTimestamp()
        return msg.channel.send(embed)
    }
}