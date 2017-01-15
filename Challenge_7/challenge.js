
//magic eightball

var numberofreplys = 4;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    if (choice == 1){
        var reply = 'You need to make some options using if/else'
    }
    else if (choice ==2){
        var reply = 'You need to find the missing semi-colon'
    }
    else if (choice ==3){
        var reply = 'You need to learn regex'
    }
    else {
        var reply = 'You need to go for a beer'       
    }

    console.log(reply);
}

ask();
