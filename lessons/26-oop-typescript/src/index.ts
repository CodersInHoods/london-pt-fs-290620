import { API } from "./API";
import { Tweet } from "./interfaces";
import { TweetBox } from "./TweetBox";

const appElement = document.querySelector("#root");

const displayTweets = (tweets: Tweet[]) => {
  tweets.forEach((tweet) => {
    const tweetInstance = new TweetBox(tweet);
    appElement?.append(tweetInstance.render());
  });
};

API.getAllTweets().then((tweets: Tweet[]) => displayTweets(tweets));
