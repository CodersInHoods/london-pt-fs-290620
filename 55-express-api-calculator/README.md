# Create express API calculator

0. Copy `calculator` module from previous exercise, as you need it for math calculations.
1. Create a server with express.
2. Assign instance of express server to `app` variable.
3. Create a few `get` end points:
- `/double/:num` - which will return result of `num * 2`
- `/square/:num` - which will return result of `num * num`
- `/:num1/:operation/:num2` - which will return result of `num1 operation num2`
4. Response should be a JSON object `{result: value}`
5. If you provide invalid parameter you should get an error with message `Bad request` and error code `400`.