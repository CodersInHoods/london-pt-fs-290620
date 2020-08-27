// const [, , ...appArgs] = process.argv;

const appArgs = [process.argv[2], process.argv[3]];

const levelFromArgs = (args) => {
    const levelArgument = args.find(arg => arg.includes('level='));

    if (levelArgument) {
        const split = levelArgument.split('=')
        return parseInt(split[1])
    } else {
        return 1;
    }
}

const args = {fast: appArgs.includes('fast'), level: levelFromArgs(appArgs) }

// console.log(process.env.MY_SECRET_KEY)