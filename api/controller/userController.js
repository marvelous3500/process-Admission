import * as userService from '../service/userService'

export async function getUserById (id) {
  return userService.getUserById(id)
}

export async function getAllUsers () {
  return userService.getAllUsers()
}

export async function addUser (user) {
  return userService.addUser(user)
}

export async function delectUser (id) {
  return userService.deleteUser(id)
}
