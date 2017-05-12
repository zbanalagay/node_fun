var readline = require('readline');

let rl = readline.createInterface(process.stdout, process.stdin);

const questions = [
    'What is your name?',
    'What do you do for a living?',
    'Where are you from?',
    'What is your favorite color?',
    'What is your spirit animal?',
    'Why do you exist?'
];
var answers = [];

var soreLoser = false;
rl.question('Are you ready to tell me about yourself? (y/n)', (answer) => {
    if (answer === 'y'){
        console.log('Cool!');
        let count = 0;
        rl.setPrompt(`${questions[count]}`);
        rl.prompt();
        rl.on('line', (a) => {
            if (a.trim().length === 0){
                console.log('Wow, you didn\'t answer.... You\'re no fun. \n I dont want to play anymore...');
                soreLoser = true;
                rl.close();
            }else {
                answers.push(a.trim());
                count++;
                if (count === questions.length){
                    rl.close();
                }else {
                    rl.setPrompt(`${questions[count]}`);
                    rl.prompt();
                }   
            }
        });
    } else if (answer === 'n'){
        console.log('Oh, ok. I guess we aren\'t friends....Bye.');
        soreLoser = true;
        rl.close();
    } else{
        console.log('Hey, you didnt answer me properly. I don\'t want to play anymore...Bye');
        soreLoser = true;
        rl.close();
    }
});

rl.on('close', () => {
    if (!soreLoser){
        process.stdout.write(`Cool that was fun! \n Now I know you on a deeper level \n Goodbye ${answers[0]}. Enjoy ${answers[1]}-ing \n`);
    }
    process.exit();
});