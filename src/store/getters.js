const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  uid: (state) => state.user.uid,
  name: (state) => state.user.name,
  team: (state) => state.user.team,
  roles: (state) => state.user.roles,
  email: (state) => state.user.email,
  permission_routes: (state) => state.permission.routes,
}
export default getters
