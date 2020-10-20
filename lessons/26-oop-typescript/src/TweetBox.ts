import { Tweet } from "./interfaces";

export class TweetBox {
  private element: HTMLDivElement;

  private get likesEl() {
    const button = document.createElement("button");

    button.innerText = `Like ${this.tweet.likes}`;

    button.addEventListener("click", () => {
      this.tweet.likes++;
      this.render();
    });
    return button;
  }

  private get retweetsEl() {
    const button = document.createElement("button");

    button.innerText = `RT ${this.tweet.retweets}`;

    button.addEventListener("click", () => {
      this.tweet.retweets++;
      this.render();
    });
    return button;
  }

  constructor(private tweet: Tweet) {
    this.element = this.createElement();
  }

  private createElement = () => {
    const div = document.createElement("div");

    return div;
  };

  public render = () => {
    this.element.innerHTML = "";
    this.element.className = "tweetbox";
    this.element.append(`${this.tweet.content}, ${this.tweet.date}`);
    this.element.append(this.likesEl);
    this.element.append(this.retweetsEl);

    return this.element;
  };
}
