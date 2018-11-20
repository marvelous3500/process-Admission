
const User = require('../models').User

export async function addUser (user) {
  await User.create(user)
}

export async function getUserById (userid) {
  let user = await User.findAll(
    {
      where: {
        id: userid
      }
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

// export async function updateUser () {
//   let updateUser = User.update({

//   })
// }
