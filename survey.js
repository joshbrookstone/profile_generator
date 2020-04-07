const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable: `, (answer) => {
  rl.question(`What's an activity you like doing? `, (answer2) => {
    rl.question(`What do you listen to while doing ${answer2}? `, (answer3) => {
      rl.question(`Which type of food is your favorite? `, (answer4) => {
        rl.question(`Which sport is your favorite? `, (answer5) => {
          rl.question(`What is your superpower? in a few words tell us what your amazing at `, (answer6) => {
            console.log(`Your name/nickname is: ${answer}`);
            console.log(`${answer} likes ${answer2}`);
            console.log(`While playing/doing ${answer2}, ${answer} likes to listen to ${answer3}`);
            console.log(`${answer}'s favorite food is ${answer4}`);
            console.log(`${answer}'s favorite sport is ${answer5}`);
            console.log(`Your super power is: ${answer6}`);
            console.log(`Thank you ${answer} for doing our survey! have a great day :)`);
            rl.close();
          });
        });
      });
    });
  });
});

