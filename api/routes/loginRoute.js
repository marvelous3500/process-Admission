
import express from 'express'
import * as auth from '../Middleware/auth'
var router = express.Router()

router.post('/', async (req, res) => {
  let user = {
    username: req.username,
    password: req.password
  }// for testing

  const token = await auth.getToken(user)
  res.status(200)
  res.json({ token: token })
})
export default router
