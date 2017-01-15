
//magic eightball w/ switch

var numberofreplys = 4;

function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    switch (choice){
        case 1:
            reply = 'You need to make some options using if/else';
            break;
        case 2:
            reply = 'You need to find the missing semi-colon';
            break;
        case 3:
            reply = 'You need to learn regex';
            break;
        default:
            reply = 'You need to go for a beer';
     }

    console.log(reply);
}

ask();
