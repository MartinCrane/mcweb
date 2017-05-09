export const updateMouse = (position) => {
  return {
    type: "UPDATE_POSITION",
    payload: position
  }
}

export function elementFloat() {
  let left = this.state.left
  let right = this.state.right
  let top = this.state.top
  let bottom = this.state.bottom
  let midX = left + ((right-left)/2)
  let midY = top
  let boundLeft = midX
  let boundRight = window.innerWidth - midX
  let boundTop = midY
  let boundBottom = window.innerHeight - midY
  let relativeX = this.props.x - midX
  let relativeY = this.props.y - midY
  let percentageX
  let percentageY
  if (relativeX >= 0) {
    percentageX = relativeX / boundRight
  } else {
    percentageX = relativeX / boundLeft
  }
  if (relativeY <= 0) {
    percentageY = relativeY / boundTop
  } else {
    percentageY = relativeY / boundBottom
  }
  let style={"transform":`rotateX(${percentageY * -20}deg) rotateY(${percentageX * 20}deg) scale(1)`}
  return style
}
export function elementFloatX() {
  let left = this.state.left
  let right = this.state.right
  let top = this.state.top
  let bottom = this.state.bottom
  let midX = left + ((right-left)/2)
  let midY = top
  let boundLeft = midX
  let boundRight = window.innerWidth - midX
  let boundTop = midY
  let boundBottom = window.innerHeight - midY
  let relativeX = this.props.x - midX
  let relativeY = this.props.y - midY
  let percentageX
  let percentageY
  if (relativeX >= 0) {
    percentageX = relativeX / boundRight
  } else {
    percentageX = relativeX / boundLeft
  }
  if (relativeY <= 0) {
    percentageY = relativeY / boundTop
  } else {
    percentageY = relativeY / boundBottom
  }
  let style={"transform":`rotateX(${percentageY * -40}deg) rotateY(${percentageX * 30}deg) scale(4)`}
  return style
}
// rotate(${percentageY * percentageX}deg)
