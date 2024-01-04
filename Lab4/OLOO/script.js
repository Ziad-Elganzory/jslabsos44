const personMethods = {
    sleep: function (hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    },

    eat: function (meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    },

    buy: function (items) {
        this.money -= items * 10;
    },

    toString: function () {
        return `Name: ${this.fullName}, Money: ${this.money}, Sleep Mood: ${this.sleepMood}, Health Rate: ${this.healthRate}`;
    }
};

function createPerson(fullName, money, sleepMood, healthRate) {
    let person = Object.create(personMethods);
    person.fullName = fullName;
    person.money = money;
    person.sleepMood = sleepMood;
    person.healthRate = healthRate;
    return person;
}

let name = prompt("Enter Person's Name");
let money = prompt("Enter Person's Money");
let sleep = prompt("Enter Sleep Mode (Recommended: neutral)");
let health = prompt("Enter Health Rate (in %)");
let person1 = createPerson(name, money, sleep, health);

let exit = 1;

while (exit === 1) {
    let choice = prompt("Enter The Operation {sleep, eat, buy} or {stop} to finish program");

    switch (choice) {
        case "sleep":
            let sl = prompt("Enter Amount of Sleep");
            person1.sleep(sl);
            alert(person1.toString());
            break;
        case "eat":
            let eat = prompt("Enter Amount To Eat");
            person1.eat(eat);
            alert(person1.toString());
            break;
        case "buy":
            let buy = prompt("Enter Amount To Buy");
            person1.buy(buy);
            alert(person1.toString());
            break;
        case "stop":
            exit = 0;
            break;
        default:
            alert("Enter Correct Operation");
            break;
    }
}
