const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers, // ← NECESARIO para detectar nuevos miembros
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// ID del canal donde quieres enviar la bienvenida
const WELCOME_CHANNEL_ID = "1432426724599271464";

client.on("ready", () => {
    console.log(`Bot encendido como ${client.user.tag}`);
});

// Evento de bienvenida
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (!channel) return;

    channel.send(`¡Bienvenid@ **${member}** a **${member.guild.name} eres el ${member.guild.memberCount} miembro**!`);
});

// Comando !hola
client.on("messageCreate", (message) => {
    if (message.content === "!hola") {
        message.reply("¡Hola, bienvenido a BloqueMágico!");
    }
});

client.login(process.env.TOKEN);
