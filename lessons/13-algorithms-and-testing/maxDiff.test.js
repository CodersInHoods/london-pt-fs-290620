const maxDiff = require('./maxDiff')

test("max diff returns the max diff", () => {
    const result = maxDiff([5, 28, 19, 21, 4, 6])
    expect(result).toBe(24)
    const nextresult = maxDiff([100, 0, 5, 10])
    expect(nextresult).toBe(100)
})

test("max diff works fine when encountering something other than a number", () => {
    const result = maxDiff([100, {}, 0, 5, 10])
    expect(result).toBe(100)
})