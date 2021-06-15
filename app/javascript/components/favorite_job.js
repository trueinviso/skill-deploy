import attachEvent from "~/helpers/attachEvent"
import heyfamFetch from "~/helpers/heyfamFetch"

const FAVORITE_JOBS_API = "/api/v1/favorite_jobs"

function favoriteJob() {
  const saveButton = document.getElementById('favorite-job-button')

  const updateFavorite = (url, body, options, callback) => {
    heyfamFetch(url, body, options).then(callback)
  }

  const createCallback = favorite => {
    saveButton.style.visibility = "hidden"
  }

  const createFavorite = job_id => {
    const options = { method: "POST" }
    const url = `${FAVORITE_JOBS_API}`
    const body = JSON.stringify({ id: job_id })
    updateFavorite(url, body, options, createCallback)
  }

  const saveFavorite = () => {
    createFavorite(saveButton.value)
  }

  if (saveButton) {
    const removeFavoriteEvent =  attachEvent(
      'click',
      saveFavorite,
      saveButton
    )
    return function cleanup() {
      removeFavoriteEvent()
    }
  }
}

export default favoriteJob
