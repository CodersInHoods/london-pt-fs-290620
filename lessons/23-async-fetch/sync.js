const blockForSomeTime = (durationInMs) => {
  const startTime = Date.now();

  while (startTime + durationInMs > Date.now()) {}

  console.log("finished blocking");
};

const doSomethingLater = (durationInMs, callback) => {
  const startTime = Date.now();

  while (startTime + durationInMs > Date.now()) {}

  callback();
};

blockForSomeTime(1000);
blockForSomeTime(1500);
blockForSomeTime(2000);
blockForSomeTime(700);
blockForSomeTime(1000);

doSomethingLater(1000, () => {
  console.log('now we"re doing this');
});

doSomethingLater(1000, () => {
  document.body.append(document.createElement("button"));
});
