const createBot = require("./mcBot");

let bots = [];

function spawnArmy(host, port, count = 5) {
  for (let i = 0; i < count; i++) {
    const bot = createBot(host, port, `ArmyBot_${i}`);
    bots.push(bot);
  }

  console.log(`🟢 Spawned ${count} bots`);
  return bots;
}

function getBots() {
  return bots;
}

module.exports = { spawnArmy, getBots };