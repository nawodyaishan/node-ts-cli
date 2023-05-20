# node-ts-cli

### Description

A TypeScript Command Line Interface (CLI) game called "Who wants to be a TypeScript Genius?".

### Repository

- Repository: [nawodyaishan/node-ts-cli](https://github.com/nawodyaishan/node-ts-cli.git)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nawodyaishan/node-ts-cli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-ts-cli
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

Run the following command to start the game:

```bash
npm run dev
```

### Game Description

The "Who wants to be a TypeScript Genius?" game is a command-line game implemented in TypeScript. It presents questions to the player and checks their answers. The game includes the following features:

- Displays a colorful welcome message using the `chalk-animation` library.
- Asks the player for their name using the `inquirer` library.
- Asks the player a question about the Sri Lankan World Cup year using the `inquirer` library.
- Checks the player's answer and displays a success or failure message using the `nanospinner` library.
- If the player answers correctly, displays a congratulations message using the `figlet` and `gradient-string` libraries.
