const mineflayer = require("mineflayer");
const aiReply = require("./aiBrain");

function createBot(host, port, usernamePrefix = "PlayerBot") {
  const bot = mineflayer.createBot({
    host,
    port,
    username: usernamePrefix + "_" + Math.floor(Math.random() * 9999),
    version: false
  });

  bot.on("spawn", () => {
    console.log("✅ Bot joined:", bot.username);
    bot.chat("🤖 AI bot online!");
  });

  // 🧠 AI chat system
  bot.on("chat", (username, message) => {
    if (username === bot.username) return;

    const reply = aiReply(message);
    setTimeout(() => {
      bot.chat(reply);
    }, 1500);
  });

  bot.on("end", () => {
    console.log("❌ Reconnecting...");
    setTimeout(() => createBot(host, port, usernamePrefix), 3000);
  });

  bot.on("error", err => console.log("Error:", err));

  return bot;
}

module.exports = createBot;
