import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import {createSpinner} from "nanospinner";
import prompt = inquirer.prompt;

let playerName: string;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));


async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Who wants to be a TypeScript Genius ?\n')
    await sleep()
    rainbowTitle.stop();

    console.log(`${chalk.bgBlue(`HOW TO PLAY`)}
    I am a process in your computer !!`)

}


// @ts-ignore
await welcome()

async function askName() {
    const answers = await inquirer.prompt(
        {
            name: 'player_name',
            type: "input",
            message: "What is your name? ",
            default() {
                return 'Player'
            },
        })
    playerName = answers.player_name
}

// @ts-ignore
await askName()

async function askCricketWorldCupYear() {
    const answers = await inquirer.prompt({
            name: "question_1",
            type: "list",
            message: "What is the Sri Lankan World Cup year ?",
            choices: [
                "2010",
                "1996", "2007"
            ]
        }
    )

    return handleAnswer(answers.question_1 === '1996')
}

async function handleAnswer(isCorrect: boolean) {
    const spinner = createSpinner('Checking the answer.....')
    await sleep()

    if (isCorrect) {
        spinner.success({text: `Nice work ${playerName}`})

    } else {
        spinner.error({text: "Game Over"})
        process.exit()
    }

}

// @ts-ignore
await askCricketWorldCupYear()