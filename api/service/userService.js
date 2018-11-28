
const User = require('../models').User

export async function addUser (user) {
  await User.create(user)
}

export async function getUserById (userid) {
  let user = await User.findOne(
    {
      where: {
        id: userid
      }
    }
  )
  return user
}

export async function getUserByusername (username) {
  let user = await User.findOne(
    {
      where: {
        username: username
      },
      attributes: ['id', 'username', 'email'],
      raw: true
    }
  )
  return user
}
export async function getAllUsers () {
  let users = await User.findAll({ imit: 10 })
  return users
}

export async function deleteUser (userid) {
  await User.destroy({
    where: {
      id: userid
    }
  })
}

export async function updateUser () {
  let updatedUser = await User.update(
    { title: req.body.title },
    { returning: true, where: { id: req.params.bookId } }
  )
  return updatedUser
}
