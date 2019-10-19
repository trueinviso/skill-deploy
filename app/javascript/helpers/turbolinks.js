const setupFunctions = []
let teardownFunctions = []

export const onEachTurbolinksPage = setup => {
  setupFunctions.push(setup)
}

document.addEventListener("turbolinks:load", e => {
  for (const setupFunction of setupFunctions) {
    const teardown = setupFunction(e)
    if (teardown) {
      teardownFunctions.push(teardown)
    }
  }
})

const teardown = e => {
  for (const teardownFunction of teardownFunctions) {
    teardownFunction(e)
  }
  teardownFunctions = []
}

document.addEventListener("turbolinks:before-cache", teardown)
