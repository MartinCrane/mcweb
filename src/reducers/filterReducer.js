export default (state='fAll', action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.payload
    default:
      return state
  }
}
