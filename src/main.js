
const Client = require("../djs/Base/Client");
const { TOKEN } = require("../Tests/config.json")
const client = new Client()

client.start(TOKEN)
