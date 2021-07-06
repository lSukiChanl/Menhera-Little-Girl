const { Command } = require('../../commands')
const db = require('../../database/database');

module.exports = class setPrefixCommand extends Command {
    constructor() {
        super({
            name: 'setprefix',
            aliases: ['spe'],
            category: 'admin',
            priority: 5,
            permLvl: 3
        })
    }
    async execute(msg, args) {
        if(!args[0]) return msg.channel.send(`𝐃𝐞𝐛𝐞𝐬 𝐀𝐠𝐫𝐞𝐠𝐚𝐫 𝐮𝐧 𝐒𝐢𝐦𝐛𝐨𝐥𝐨 𝐜𝐨𝐦𝐨 𝐏𝐫𝐞𝐟𝐢𝐱 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨`)
            let exists = await db.admin.existsPrefix(msg.guild.id)
        if(exists) {
            await db.admin.updatePrefix(msg.guild.id, args[0])
        } else {
            await db.admin.addPrefix(msg.guild.id, args[0])
        }
        msg.channel.send(`𝐍𝐮𝐞𝐯𝐨 𝐏𝐫𝐞𝐟𝐢𝐱  **${args[0]}**, 𝐏𝐚𝐫𝐚 **${msg.guild.name}**`)
    }
}