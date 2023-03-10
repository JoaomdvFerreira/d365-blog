import fetch from 'isomorphic-fetch'

// We access our values with enviroment variables,
// we don't want to share these values in our code
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

// We encode our client_id and client_secret again to send with the POST request.
// This is a part of the authorization header
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

// This function gets the access token so that we can access the API
const getAccessToken = async () => {
  const body = new URLSearchParams()
  body.append('grant_type', 'refresh_token')
  body.append('refresh_token', refresh_token)

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
  })

  return response.json()
}

// We use the afformentioned access token and send it with the request to the API
// this requests gets the currently playing song.
export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
