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
            return msg.reply(" ๐๐๐ง๐ก๐๐ซ๐-๐๐ก๐๐ง ๐๐จ ๐๐ฎ๐๐๐ ๐๐ง๐๐จ๐ง๐ญ๐ซ๐๐ซ๐ญ๐ ๐๐ง ๐๐ข๐ง๐ รบ๐ง ๐๐๐ง๐๐ฅ ๐๐ ๐๐จ๐ณ ")
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('https://radiostreamingaac.com:8590/radioanimex');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
    }
}