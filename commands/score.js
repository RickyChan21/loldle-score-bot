const { SlashCommandBuilder } = require("discord.js");
const regularExp = new RegExp('^[1-9][0-9]?-[1-9][0-9]?-[1-9][0-9]?-[1-9][0-9]?$')
module.exports = {
data: new SlashCommandBuilder()
        .setName('score')
		.setDescription('Enter your score for today')
        .addStringOption(option =>
            option.setName('input')
        .setDescription('The score is')),
	async execute(interaction) {
        let score = interaction.options.getString('input') ?? 'Please enter a score';
        if (score.match(regularExp)) {
            var scoreArr = score.split('-').map(Number);
            let sum = scoreArr.reduce((a, b) => a + b);
            await interaction.reply("Score: "+score.toString()+" Total: "+ sum.toString())
        } else {
            await interaction.reply("Error")
        }
	},
};
// TEST 