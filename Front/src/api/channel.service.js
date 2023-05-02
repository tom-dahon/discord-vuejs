import Axios from './caller.service'


let getAllChannels = () => {
  console.log(Axios.get('/channels'))
}

let getUser = (uid) => {
  return Axios.get('/channel/'+uid)
}

let updateUser = (user) => {
  return Axios.patch('/channel/'+user.id, user)
}

let createChannel = (user) => {
  return Axios.put('/channel', user)
}

let deleteChannel = (uid) => {
  return Axios.delete('/channel/'+uid)
}

export const channelService = {
  getAllUsers,
  getUser,
  updateUser,
  createChannel,
  deleteChannel,
}