const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const moment = require('moment');
const config = require('../../config');

module.exports = class InfoCommand extends Command {
    constructor() {
        super({
            name: 'info',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        const flags = {
            DISCORD_EMPLOYEE: 'Discord Employee',
            DISCORD_PARTNER: 'Discord Partner',
            BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
            BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
            HYPESQUAD_EVENTS: 'HypeSquad Events',
            HOUSE_BRAVERY: 'House of Bravery',
            HOUSE_BRILLIANCE: 'House of Brilliance',
            HOUSE_BALANCE: 'House of Balance',
            EARLY_SUPPORTER: 'Early Supporter',
            TEAM_USER: 'Team User',
            SYSTEM: 'System',
            VERIFIED_BOT: 'Verified Bot',
            VERIFIED_DEVELOPER: 'Verified Bot Developer'
        };

        let member = msg.mentions.members.first() || msg.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const userFlags = member.user.flags.toArray();
		const embed = new MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
			.setColor(member.displayHexColor || 'BLUE')
			.addField('Informacion de Usuario', [
				`**♡ Username:** ${member.user.username}`,
				`**♡ Discriminator:** ${member.user.discriminator}`,
				`**♡ ID:** ${member.id}`,
				`**♡ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
				`**♡ Avatar:** [Link to avatar](${member.user.avatarURL()+"?size=1024"})`,
				`**♡ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**♡ Status:** ${member.user.presence.status}`,
				//`**♡ Game:** ${member.user.getActivity || 'Not playing a game.'}`,
				`\u200b`
			])
			.addField('Miembro', [
				`**♡ Highest Role:** ${member.roles.highest.id === msg.guild.id ? 'None' : member.roles.highest.name}`,
				`**♡ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
				`**♡ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
				`\u200b`
			]);
            embed.setFooter(" 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ config.author)
		return msg.channel.send(embed);
    }
}