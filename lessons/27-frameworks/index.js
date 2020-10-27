let state = {
  title: "Welcome people",
  people: [
    { name: "Sam", age: 29 },
    { name: "Fred", age: 23 },
    { name: "Flora", age: 99 },
  ],
};

// { title: "hello" }
// >
// { title: "hello", people: []}
const setState = (partialNewState) => {
  state = {
    ...state,
    ...partialNewState,
  };
  render();
};

const render = () => {
  const rootEl = document.querySelector("#root");

  rootEl.innerHTML = "";

  rootEl.append(Title({ text: state.title }));
  rootEl.append(Title({ text: "another title" }));
  rootEl.append(Title({ text: "another title2 " }));
  rootEl.append(Title({ text: "another title3 333" }));
  rootEl.appendChild(People({ people: state.people }));
};

// const render = () => {
//   const personDivs = state.people.map((person) => {
//     return Clement.createElement("div", {
//       className: "person",
//       text: `${person.name} is ${person.age}`,
//       onClick: () => {
//         // personDiv.remove();

//         setState({
//           people: state.people.filter((p) => p !== person),
//         });
//       },
//     });
//   });

//   const peopleDiv = Clement.createElement("div", {
//     className: "people-container",
//     children: personDivs,
//   });

//   const rootEl = document.querySelector("#root");

//   rootEl.innerHTML = "";

//   rootEl.append(Clement.createElement("h1", { text: state.title }));
//   rootEl.appendChild(peopleDiv);
// };

render();
