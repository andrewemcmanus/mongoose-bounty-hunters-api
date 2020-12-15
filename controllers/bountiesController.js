const router = require('express').Router();

const models = require('../models');

router.get('/', (req, res) => {
  // res.send('hello from GET /bounties')
  models.Bounty.find().then((foundBounties) => {
    res.status(200).json({ bounties: foundBounties })
    // mongoose should be sent as json
  }
)})

router.get('/:id', (req, res) => {
  res.send('hello from GET bounties/:id')
})

router.post('/', (req, res) => {
  res.send('hello from POST /bounties')
})

router.put('/:id', (req, res) => {
  res.send('hello from PUT /bounties')
})

router.delete('/:id', (req, res) => {
  res.send('hello from DELETE /bounties/:id')
})

module.exports = router;
