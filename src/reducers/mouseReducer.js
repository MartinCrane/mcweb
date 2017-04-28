export default (state={x: 0, y: 0}, action) => {
  switch (action.type) {
    case "UPDATE_POSITION":
      return action.payload
    default:
      return state
  }
}
