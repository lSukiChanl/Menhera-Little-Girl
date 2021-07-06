const { Command } = require('../../commands')
const db = require('../../database/database');

module.exports = class ClearCommand extends Command {
    constructor() {
        super({
            name: 'clear',
            aliases: [],
            category: 'admin',
            priority: 5,
            permLvl: 3
        })
    }
    async execute(msg) {

        const messageArray = msg.content.split(' ');
        const args = messageArray.slice(1);
        
        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return msg.reply('𝐒𝐨𝐥𝐨 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐮𝐧 𝐍𝐮𝐦𝐞𝐫𝐨') }

        if (parseInt(args[0]) > 100) {
            return msg.reply('𝐒𝐨𝐥𝐨 𝐏𝐮𝐞𝐝𝐞𝐬 𝐁𝐨𝐫𝐫𝐚𝐫 𝟏𝟎𝟎 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐚𝐥 𝐌𝐢𝐬𝐦𝐨 𝐓𝐢𝐞𝐦𝐩𝐨')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        msg.channel.bulkDelete(deleteAmount + 1, true);
        msg.reply(`𝐒𝐞 𝐡𝐚𝐧 𝐁𝐨𝐫𝐫𝐚𝐝𝐨 ${deleteAmount} 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐄𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞`)

    }
}