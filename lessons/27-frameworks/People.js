const People = ({ people }) => {
  return Clement.createElement("div", {
    className: "people-container",
    children: people.map((person) => {
      return Person({ person });
    }),
  });
};
