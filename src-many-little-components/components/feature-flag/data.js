const dummyApiResponse = {
  showLightAndDarkMode: true,
  showBordGame: false,
  showRandomColor: true,
  showAccordion: true,
  showTreeView: true,
}

function fetchFeatureFlags() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyApiResponse)
    }, 500)
  })
}

export default fetchFeatureFlags
