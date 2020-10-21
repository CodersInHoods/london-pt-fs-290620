const Person = ({ person }) => {
  return Clement.createElement("div", {
    className: "person",
    text: `${person.name} is ${person.age}`,
    onClick: () => {
      // personDiv.remove();

      setState({
        people: state.people.filter((p) => p !== person),
      });
    },
  });
};
