const { SlashCommandBuilder } = require("discord.js");
const regularExp = new RegExp('^[1-9][0-9]?-[1-9][0-9]?-[1-9][0-9]?-[1-9][0-9]?')
module.exports = {
data: new SlashCommandBuilder()
        .setName('score')
		.setDescription('Enter your score for today')
        .addStringOption(option =>
            option.setName('input')
        .setDescription('The score is')),
	async execute(interaction) {
        const score = interaction.options.getString('input') ?? 'Please enter a score';
        if (score.match(regularExp)) {
            await interaction.reply(score);
        } else {
            await interaction.reply("Error")
        }
	},
};