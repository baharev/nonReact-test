const blue = document.getElementById('blue')
const green = document.getElementById('green')
console.log(blue)
console.log(green)

function swallow(e) {
  e.preventDefault()
  e.stopPropagation()
}

function onMouseDown(e) {
  swallow(e)
  console.log('mousedown: ', e.target.id)
  console.log('type:', e.type, ', (x, y):', e.clientX, e.clientY)
  const id = e.target.id
  document.getElementById(id).remove()
}

function onTouchStart(e) {
  //swallow(e)
  console.log('touchstart: ', e.touches[0].target.id)
  console.log('type:', e.type, ', (x, y):', e.touches[0].pageX, e.touches[0].pageY)
  const id = e.touches[0].target.id
  document.getElementById(id).remove()
}

blue.addEventListener('mousedown', onMouseDown)
green.addEventListener('mousedown', onMouseDown)

blue.addEventListener('touchstart', onTouchStart)
green.addEventListener('touchstart', onTouchStart)
