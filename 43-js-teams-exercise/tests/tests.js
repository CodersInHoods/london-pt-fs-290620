const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

// Exercise #
describe("createPlayerEl", () => {
	const playerEl = createPlayerEl(players.pool[2]);

	test("createPlayerEl is a function", () => {
		expect(typeof createPlayerEl).toEqual("function");
	});

	test("createPlayerEl should contain li ", () => {
		expect(playerEl.tagName).toEqual("LI");
	});

	test("createPlayerEl should contain li with class 'player'", () => {
		expect(playerEl.classList.value).toEqual("player");
	});

	test("createPlayerEl should contain p element", () => {
		const p = playerEl.querySelectorAll("p").length;
		expect(p).toEqual(1);
	});

	test("createPlayerEl p tag has name as a text", () => {
		const text = playerEl.querySelector("p").innerHTML;
		expect(text).toEqual(players.pool[2]);
	});

	test("createPlayerEl should have element with class 'buttons'", () => {
		const buttons = playerEl.querySelectorAll(".buttons").length;
		expect(buttons).toEqual(1);
	});

	test("createPlayerEl should have 2 buttons", () => {
		const buttons = playerEl.querySelectorAll("button").length;
		expect(buttons).toEqual(2);
	});

	test("createPlayerEl should have element with class 'to_team1'", () => {
		const buttons = playerEl.querySelector(".buttons");
		const totTeam1 = buttons.querySelectorAll(".to_team1").length;
		expect(totTeam1).toEqual(1);
	});

	test("createPlayerEl should have element with class 'to_team2'", () => {
		const buttons = playerEl.querySelector(".buttons");
		const totTeam2 = buttons.querySelectorAll(".to_team2").length;
		expect(totTeam2).toEqual(1);
	});
});

describe("team 1", () => {
	const poolEl = document.querySelector(".pool");

	test("team 1 should be an array", () => {
		expect(Array.isArray(players.team1)).toEqual(true);
	});

	test("team 1 should be empty", () => {
		expect(players.team1.length).toEqual(0);
	});

	test("should add player to team when when you click 'to_team1'", () => {
		const team1List = document.querySelector(".team1");
		const thirdPlayer = poolEl.querySelectorAll("li")[2];
		const toTeam1 = thirdPlayer.querySelector(".to_team1");

		expect(poolEl.querySelectorAll("li").length).toEqual(10);
		expect(team1List.querySelectorAll("li").length).toEqual(0);
		expect(players.pool.length).toBe(10);
		expect(players.team1.length).toBe(0);

		fireEvent.click(toTeam1);

		expect(poolEl.querySelectorAll("li").length).toEqual(9);
		expect(team1List.querySelectorAll("li").length).toEqual(1);
		expect(players.pool.length).toBe(9);
		expect(players.team1.length).toBe(1);
	});
});

describe("team 2", () => {
	const poolEl = document.querySelector(".pool");

	test("team 2 should be an array", () => {
		expect(Array.isArray(players.team2)).toEqual(true);
	});

	test("team 2 should be empty", () => {
		expect(players.team2.length).toEqual(0);
	});

	test("should add player to team when when you click 'to_team2'", () => {
		const team2List = document.querySelector(".team2");
		const thirdPlayer = poolEl.querySelectorAll("li")[2];
		const toTeam2 = thirdPlayer.querySelector(".to_team2");

		expect(poolEl.querySelectorAll("li").length).toEqual(9);
		expect(team2List.querySelectorAll("li").length).toEqual(0);
		expect(players.pool.length).toBe(9);
		expect(players.team2.length).toBe(0);

		fireEvent.click(toTeam2);

		expect(poolEl.querySelectorAll("li").length).toEqual(8);
		expect(team2List.querySelectorAll("li").length).toEqual(1);
		expect(players.pool.length).toBe(8);
		expect(players.team1.length).toBe(1);
	});
});

describe("reset", () => {
	test("reset teams when click on '#reset'", () => {
		const resetBtn = document.querySelector('#reset');
		const poolEl = document.querySelector(".pool");
		const team1List = document.querySelector(".team1");
		const team2List = document.querySelector(".team2");

		expect(poolEl.querySelectorAll("li").length).toEqual(8);
		expect(team1List.querySelectorAll("li").length).toEqual(1);
		expect(team2List.querySelectorAll("li").length).toEqual(1);
		expect(players.pool.length).toBe(8);
		expect(players.team1.length).toBe(1);
		expect(players.team2.length).toBe(1);

		fireEvent.click(resetBtn);

		expect(poolEl.querySelectorAll("li").length).toEqual(10);
		expect(team1List.querySelectorAll("li").length).toEqual(0);
		expect(team2List.querySelectorAll("li").length).toEqual(0);
		expect(players.pool.length).toBe(10);
		expect(players.team1.length).toBe(0);
		expect(players.team2.length).toBe(0);
	});
});
