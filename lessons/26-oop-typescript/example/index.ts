console.log("we are in a TS file!");

const sayHello = (name: string) => `Hello, ${name}!`;

sayHello("sam");

// sayHello(6);

interface Tweet {
  userId: number;
  content: string;
  time: number;
  imageUrl?: string;
}

const getTweets = async (userId: number) => {
  const res = await fetch(`/users/${userId}/tweets`);
  const tweetContents = await res.json();
  return tweetContents.forEach((tweetContent: Tweet) => {
    return {
      ...tweetContent,
      userId,
    } as Tweet;
  });
};

const myTweet: Tweet = {
  userId: 1,
  content: "",
  time: 123,
  imageUrl: "hhtps://image.jpg",
};

let data: [string, number] = ["", 0];

data[0] = "hello";
data[1] = 4;

enum MessageTypes {
  Hello,
  Bye,
  Morning,
  Evening,
  Yell,
  Error,
}

const showMessage = (type: MessageTypes) => {
  if (type === MessageTypes.Hello) {
    return "hello";
  } else if (type === MessageTypes.Bye) {
    return "bye";
  }
};
