const getters = {
  token: state => state.user.token,
  user: state => state.user.user,
  userStatus:state=>state.userStatus
}

export default getters
