export default (() => {
  const searchResponseBox = () => {
    let responseBoxes: NodeListOf<Element> | null = null
    // Search for every 3 seconds until elements are found
    let search = setInterval(() => {
      console.log('searching...')
      responseBoxes = document.querySelectorAll('.markdown')
      if (responseBoxes) {
        clearInterval(search)
        console.log(responseBoxes)
      }
    }, 3000)
    return responseBoxes
  }

  const addButtonsTo = (list: NodeListOf<Element>) => {
    console.log('adding buttons...')
    list.forEach((response, key) => {
      console.log('added a button to ' + key.toString())
      // Create icon
      const icon = document.createElement('img')
      icon.src = chrome.runtime.getURL('icons/speak.png')
      icon.id = key.toString()
      icon.style.cssText = `
        width: 16px;
        height: 16px;
        cursor: pointer;
      `
      // Create button
      const button = document.createElement('button')
      button.onclick = (ev) => {
        console.log('clicked')
      }
      button.id = key.toString()

      // Add icon to button
      button.appendChild(icon)
      // Add button to response
      response.appendChild(button)
    })
  }

  // look for changes in the Chat UI
  const observer = new MutationObserver((mutations) => {
    console.log('changes happened')
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        const responseBoxes = searchResponseBox()
        addButtonsTo(responseBoxes!)
      }
    })
  })
  // Start observing the target node for configured mutations
  console.log('started')
  const target = document.querySelector(
    '#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.flex-1.overflow-hidden > div > div > div',
  )!
  observer.observe(target, { childList: true, subtree: true })
})()
