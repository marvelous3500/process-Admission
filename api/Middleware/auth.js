
import jwt from 'jsonwebtoken'
import * as users from '../service/userService'

export async function getToken (req, res, next) {
  try {
    var username = req.body.username
    const user = await users.getUserusername(username)
    if (typeof user.username !== 'undefined') {
      const token = jwt.sign({ user }, 'secretkey', { expiresIn: '1h' })
      res.status(200).json({ user: user, token: token })
      next()
    }
  } catch (error) {
    res.json({ message: `${username} is not a user ` })
  }
}

export function verifyHeader (req, res, next) {
  let token = req.headers['access-token']
  if (token) {
    jwt.verify(token, 'Secretkey', (err, decoded) => {
      if (err) {
        res.json({ message: 'Invalid token Signature' })
      } else {
        next()
      }
    })
  } else {
    res.send({ message: 'No token provided.' })
    next()
  }
}

// export function verifyHeader(req, res, next) => {
  //   const bearerHeader = req.header['Authorization']
  //   console.log('befor header', bearerHeader)
  //   if (typeof bearerHeader !== 'undefined') {
  //     const bearer = bearerHeader.split(' ')
  //     const token = bearer[1]
  //     // req.token = token
  //     console.log(token)
  //     jwt.verify(token, 'secretkey', (err, decoded) => {
  //       if (err) {
  //         return res.json({ message: 'invalid token' })
  //
  //       } else {
  //         req.decoded = decoded
  //         next()
  //       }
  //     })
  //   } else {
  //     res.status(403)
  //     res.json({ errorMessage: 'require token to acess this endpoint' })
  //   }
  // }
  