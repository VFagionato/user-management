const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

router.get('/user/welcome', async (req, res) => {
  return res.send('Welcome to User microservice for HugeERP.')
})

router.post('/user/register', UserController.store)
router.get('/users', UserController.list)
router.get('/user/:id', UserController.detail)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.delete)




module.exports = router