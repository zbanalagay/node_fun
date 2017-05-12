const questions = [
    'What is your name?',
    'What do you do for a living?',
    'Where are you from?',
    'What is your favorite color?',
    'What is your spirit animal?',
    'Why do you exist?'
];
let answers = [];
let soreLoser = false;

askQuestion = (question) => {
    process.stdout.write(` \n ${questions[question]} >`);
}

process.stdin.on('data', (data) => {
    let answerData = data.toString().trim();
    if (answerData.length === 0){
        process.stdout.write('Wow, you didn\'t answer.... You\'re no fun. \n I dont want to play anymore \n\n');
        soreLoser = true;
        process.exit();
    } else{
        answers.push(data.toString().trim());
        if (answers.length === questions.length){
            process.exit();
        } else{
            askQuestion(answers.length);
        }
    }
})

process.on('exit', () => {
    if (!soreLoser){
        process.stdout.write(`Cool that was fun! \n Now I know you on a deeper level \n Goodbye ${answers[0]}. Enjoy ${answers[1]}-ing \n`);
    }
})

askQuestion(0);