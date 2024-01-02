
assignmentNum = Number(prompt("Enter Assignment number (1 / 2 / 3)"));
switch (assignmentNum) {
    case 1:
        EX1();
        
        break;

    case 2:
        EX2();
        exit = 1;
        break;

    case 3:
        time = prompt("Enter the Hour in (from 0 to 24)");
        alert(`${EX3(parseInt(time))}`);
        exit = 1;
        break;
    default:
        console.log("invalid input");
    }


function EX1() {
    while (true) {
        age = prompt("Enter your age: ");
        if (age !== null && age <= 0) {
            alert("age must be larger than 0");
        }
        else break
    }
    if (age !== null) {
        if (age <= 10) {
            alert("Hello Child!!!");
        }
        else if (age <= 18) {
            alert("Hello Teenager!!!");
        }
        else if (age <= 50) {
            alert("Grown up !!!");
        }
        else if (age > 50) {
            alert("Hello Old user!!");
        }
    }
}

function EX2() {
    let vowels = {
        a: 0,
        e: 0,
        o: 0,
        u: 0,
        i: 0,
    };
    let str = prompt("Enter string");
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "A":
            case "a":
                vowels.a++;
                break;

            case "E":
            case "e":
                vowels.e++;
                break;

            case "O":
            case "o":
                vowels.o++;
                break;

            case "U":
            case "u":
                vowels.u++;
                break;

            case "I":
            case "i":
                vowels.i++;
                break;
        }
    }
    alert(JSON.stringify(vowels));
}

function EX3(time) {
    const period = time >= 12 ? 'PM' : 'AM';
    const Hour = (time % 12) || 12;
    return `${Hour} ${period}`;
}
