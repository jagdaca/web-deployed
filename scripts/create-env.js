const fs = require('fs')
fs.writeFileSync('./.env', `GITHUB_TOKEN=${process.env.GITHUB_TOKEN}\n`)