const API_ENDPOINT = "http://localhost:3000"
const USERS_URL = `${API_ENDPOINT}/users?_embed=tweets`
const TWEETS_URL = `${API_ENDPOINT}/tweets?_expand=user&_embed=comments`

const getTweets = () => fetch(TWEETS_URL).then(res => res.json())

export default {
    getTweets
}