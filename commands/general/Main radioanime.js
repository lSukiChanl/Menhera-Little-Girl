const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');
module.exports = class RadioAnimeCommand extends Command {
    constructor() {
        super({
            name: 'radioanime',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        msg.channel.send("Reproduciendo ahora: ");
        const embedRA = new MessageEmbed()
            .setTitle("RADIO ANIMEX")
            .setColor("RANDOM")
            .setThumbnail("https://1.bp.blogspot.com/-LD2HnZd1fyI/X_LRif0i3kI/AAAAAAAACac/KIS6n4A574wkme1ffZWY5omKKyJzgI-lQCLcBGAsYHQ/s16000/fghgh.png")
            .setDescription(`Radio Anime las 24 Horas del Dia`)
            .setURL("https://www.radioanimex.com")
        msg.channel.send(embedRA);
        var VC = msg.member.voice.channel;
        if (!VC)
            return msg.reply(" 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐂𝐡𝐚𝐧 𝐍𝐨 𝐏𝐮𝐞𝐝𝐞 𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐭𝐞 𝐞𝐧 𝐍𝐢𝐧𝐠ú𝐧 𝐂𝐚𝐧𝐚𝐥 𝐝𝐞 𝐕𝐨𝐳 ")
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('https://radiostreamingaac.com:8590/radioanimex');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
    }
}