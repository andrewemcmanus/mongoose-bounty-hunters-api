require('dotenv').config()

const models = require('./models')

models.Bounty.create({
  name: 'Yosemite Sam',
  wantedFor: 'rootin n tootin',
  client: 'Walt Disney',
  reward: 1000,
  ship: 'good chip lollipop',
  hunters: [
    {
      name: 'Bugs Bunny',
      origin: 'something'
    }
  ],
  captured: false,
  lastSeen: 1942
}).then(() => {console.log('done')});
