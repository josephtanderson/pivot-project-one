const intro = "Welcome to Trivia Night. \n---\nThere are 10 questions. \n---\nFor every 3 correct answers,\nthe point value of each question will increase.\nAre you ready?\n \n";
const retry = "\nRetry?\n \nOk: \"Retry\"  Cancel: \"Quit\"";
const randomizer = "\nRandomize question Order?\n \nOk: \"Random\"  Cancel: \"Not Random\"";
let random = false;
let randQs;
let randArr = [0, 1, 2, 3,4,5,6,7,8,9];
let rand = () => {
    let num = Math.round(Math.random()*(10-x));
    if (num === randArr.length) {
        num -= 1;
    }
    randQs = randArr.splice(num, 1, );
    console.log("Question Number = " + randQs + " on  line 12");
    console.log("randArr = " + randArr + " on line 13");
    return randQs;
};

function conf(a) {
    console.log(a);
     if (confirm(a)) {
         return true
        } else {
            return false
        };
};

function textQ(a) {
    console.log(a);
    return prompt(a);
}

function alrt (a) {
    console.log(a);
    alert(a);
}

const questionArr = [
    /*1*/ 'What is the name of the ship that brought the Pilgrims to America?',
    /*2*/ 'What is the fastest land animal?',
    /*3*/ "A century is longer than a millennium. \nOk: \"True\"  Cancel: \"False\"",
    /*4*/ "What is the capitol of the United Kingdom?",
    /*5*/ 'What month is Valentine\'s day separated?',
    /*6*/ "Which restaurant has the most locations in the US?",
    /*7*/ "A meter is longer that a yard. \nOk: \"True\"  Cancel: \"False\"",
    /*8*/ "What company makes the Mario video game series?",
    /*9*/ "What is the largest country by land area?",
    /*10*/ "What does the 'L' in HTML stand for?"
];

// true = t/f
// false = text input
const questionMap = [
     /*1*/ false,
     /*2*/ false,
     /*3*/ true,
     /*4*/ false,
     /*5*/ false,
     /*6*/ false,
     /*7*/ true,
     /*8*/ false,
     /*9*/ false,
     /*10*/ false
    ];

//answers
const answer = [
     /*1*/"mayflower",
     /*2*/"cheetah",
     /*3*/false,
     /*4*/'london',
     /*5*/"february",
     /*6*/"subway",
     /*7*/false,
     /*8*/"nintendo",
     /*9*/'russia',
     /*10*/ "language"
    ];

//answers with capitals
const capsAnswer = [
     /*1*/"Mayflower",
     /*2*/"Cheetah",
     /*3*/false,
     /*4*/"London",
     /*5*/"February",
     /*6*/"Subway",
     /*7*/false,
     /*8*/"Nintendo",
     /*9*/"Russia",
     /*10*/"Language"
    ];

var progArr = ["☐","☐","☐","☐","☐","☐","☐","☐","☐","☐"];
let attempt = "";
//tracks 
var x = 0;
//tracks number of  correct answers
let inc = 0;
//player point count
let points = 0;
//tracks round number
let round;
//game hud
let head;

let progress;
var thisQuestion;

//inital point value
let pointValue = 5;

function test(guess, ans, caps) {
    if (guess === ans || guess === caps) {
        return true;
    } else {return false}
}

const correct = () => {
    //☑
    progArr.splice(x, 1, '☑');
    progress = "   " + progArr.join(" ") + "\n \n";
    inc++;
    points+= pointValue;
    head = progress + "Question: " + round + "   Point Value: " + pointValue + "\n -----  Total Points: " + points + "  ----- \n \n";
    let correctText = head + thisQuestion + "\n \n" + "Correct!\n \n" + "Answer: "+ capsAnswer[i];
    alrt(correctText);
    round++;
}

const incorrect = () => {
    //☒
    progArr.splice(x, 1, '☒');
    progress = "   " + progArr.join(" ") + "\n \n";
    head = progress + "Question: " + round + "   Point Value: " + pointValue + "\n -----  Total Points: " + points + "  ----- \n \n";
    let incorrectText = head + thisQuestion + "\n \n" + "Incorrect!\n \n" + "Answer: "+ capsAnswer[i];
    alrt(incorrectText);
    round++;
}

function question() {
    if (random) {
        i = rand(); 
    } else {
        i=x;
        }
    progress = "   " + progArr.join(" ") + "\n \n";
    head = progress + "Question: " + round + "   Point Value: " + pointValue + "\n -----  Total Points: " + points + "  ----- \n \n";
    thisQuestion = questionArr[i];
    attempt = head + thisQuestion + "\n \n";
    if (questionMap[i]){
        attempt = conf(attempt);
    } else {
        attempt = textQ(attempt);
    }
    if (test(attempt, answer[i], capsAnswer[i])){
        correct();
        } else {
            incorrect();
    }
    console.log("i = " + i + " on line 164");
} 

// ----------------------------------------------------------------------------------------------------
if (conf(intro)){
    if (conf(randomizer)) {
         random = true;
    }
    while (x<questionArr.length) {
        //sets point value
        if (inc >= 3) {
            pointValue = 10;
            if (inc >= 6) {
                pointValue = 25;
                //if you get them all correct, the last question is worth 50 points!
                if (inc >= 9) {
                    pointValue = 50;
                }
            } 
        }
        //sets round number
        round = x+1;
        //sets and asks question
        question();
        x++;
    }
    let end = progress + "Congrats!\n \nTotal Points: " + points + "\n";
    alrt(end);
    if (conf(retry)) {
            location.reload();
    } 
} else {
    let escConfirm = 'Oh, wow. Really? \nClick ok to play.';
    if (conf(escConfirm)) {
        location.reload();
    } else {
        let escConfirm2 = 'Seriously, then why are you here? \nJust press ok, and let\'s start.';
        if (conf(escConfirm2)) {
            location.reload();
        } else {
            let escape = "Fine, I don't need you anyway.";
            alrt(escape);
        }
    }
}
