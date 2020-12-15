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
  // res.send('hello from GET bounties/:id')
  // remember that _id and its unique string are how Mongo accesses the record!
  momdels.Bounty.findOne({_id: req.params.id}).then((bounty) => {
    res.status(200).json({ bounty })
  })
})

router.post('/', (req, res) => {
  // res.send('hello from POST /bounties')
  // CREATE A NEW BOUNTY
  // we need middleware to receive req.body
  models.Bounty.create(req.body).then((bounty) => {
    res.status(201).json({ bounty })
  }).catch((err) => { res.send(err) })
})

router.put('/:id', (req, res) => {
  res.send('hello from PUT /bounties')
})

router.delete('/:id', (req, res) => {
  res.send('hello from DELETE /bounties/:id')
})

module.exports = router;
