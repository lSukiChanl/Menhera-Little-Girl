const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class MenheraCommand extends Command {
   constructor() {
      super({
         name: 'menhera',
         aliases: [],
         category: 'general',
         priority: 9,
         permLvl: 0
      })
   }
   execute(msg) {
      let NumMagic = Math.floor(Math.random()*968);
      NumMagic = NumMagic + 1;
      let embed = new MessageEmbed()
          embed.setColor('#D57DC1')
          embed.setDescription(" 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚 𝐑𝐚𝐧𝐝𝐨𝐦 " + NumMagic + " / "+"969... ")
          embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Menhera/Menhera"+NumMagic+".png")
      return msg.channel.send(embed)
   }
}