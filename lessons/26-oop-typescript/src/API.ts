const API_ENDPOINT = "http://localhost:3000";
const TWEETS_URL = `${API_ENDPOINT}/tweets`;

const getAllTweets = async () => {
  const res = await fetch(TWEETS_URL);
  return await res.json();
};

export const API = {
  getAllTweets,
};
