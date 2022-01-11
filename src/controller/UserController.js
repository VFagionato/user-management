const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  async store (req, res) {
    const {username, email, password, employee, company} = req.body

    const hash = await bcrypt.hash(password, 10)

    try {
      const user = await User.create({username, email, password: hash, employee, company})
      return res.json(user)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  },

  async list (req, res) {
    const users = await User.findAll()
    if (users.length) {
      return res.json(users)
    }

    return res.sendStatus(204)
  },

  async detail (req, res) {
    const {id} = req.params

    if (!id) {
      return res.status(401).json({error: 'ID is required'})
    }

    try {
      const user = await User.findByPk(id)
      if (!user) {
        return res.sendStatus(404)
      }
      return res.json(user)
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  },

  async update(req, res) {
    const { id } = req.params

    if (!id) {
      return res.status(401).json({error: 'ID is required'})
    }

    const user = await User.findByPk(id)

    if (!user) {
      return res.sendStatus(404)
    }

    for ([key, value] of Object.entries(req.body)) {
      user[key] = value
    }

    await user.save()
    return res.json(user)
  },

  async delete(req, res) {
    const { id } = req.params
    if (!id) {
      res.status(400).json({error: 'id most be provided'})
    }
    const { password } = req.body
    if (!password) {
      res.status(400).json({error: 'password not provided'})
    }

    try {
      const user = await User.findByPk(id)
      
      if (!user) {
        return res.status(404).json({error: 'User not found or deleted'})
      }

      const hashedPassword = user.dataValues.password
      const isValid = await bcrypt.compare(password, hashedPassword)

      if (!isValid) {
        return res.status(401).json({error: "You don't have permission to delete"})
      }

      await user.destroy()
      return res.status(200).json({success: 'User has been deleted'})

    } catch (error) {
      return res.status(500).json({error: error.message})
      
    }
    
  }

}