const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0

  function onKeyDownHeandler(e) {
    const key = parseInt(e.detail || e.which || e.location)
    if (key === code[index]) {

    } else {

    }
  }
}
