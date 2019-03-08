const express = require('express')
const router = express.Router()
const locationList = require('../data/locations.json')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const LOCATION__DATA__FILE = './data/locations.json'
const fs = require('fs')
router.use(bodyParser.json())
router.use(express.static('website'))
router.use(bodyParser.urlencoded({ extended: false }))

// Route    Get routes/locations
// Desc     Return the location list
router.get('/', (req, res) => {
  res.send(locationList)
})

// Route    Get routes/locations/:id
// Desc     Return a specific location by id with its inventory
router.get('/:locationId', (req, res) => {
  const ids = locationList.map(location => location.id)
  const idIndex = ids.indexOf(req.params.locationId)
  idIndex !== -1
    ? res.status(200).send(locationList[idIndex])
    : res.status(404).send({ message: 'No location with this id' })
})

// posting inventory item to inventory.json

router.post('/', (req, res) => {
  const newWarehouse = {
    id: uuid.v4(),
    name: req.body.name,
    address: `${req.body.address}, ${req.body.location} `,
    managerName: req.body.managerName,
    managerTitle: req.body.managerTitle,
    phone: req.body.phone,
    email: req.body.email,
    categories: req.body.categories,
    inventory: [],
  }

  locationList.push(newWarehouse)
  fs.writeFile(LOCATION__DATA__FILE, JSON.stringify(locationList), err => {
    if (err) {
      console.error('Error writing to file:', err)
      return
    }
    console.log('Warehouse has been added')
  })

  if (
    !newWarehouse.id ||
    !newWarehouse.name ||
    !newWarehouse.address ||
    !newWarehouse.managerName ||
    !newWarehouse.managerTitle ||
    !newWarehouse.phone ||
    !newWarehouse.name ||
    !newWarehouse.categories ||
    !newWarehouse.inventory
  ) {
    return res.status(400).send('Please fill in the blank')
  }
  res.json(locationList)
})

module.exports = router
