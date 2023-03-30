window.onload = function(){
    var num1 = Math.floor(Math.random() * 21 );
    document.getElementById("first").innerHTML = num1;
    var num2 = Math.floor(Math.random() * 21 );
    document.getElementById("second").innerHTML = num2;
    var num3 = Math.floor(Math.random() * 21 );
    document.getElementById("third").innerHTML = num3;
    if( num1 == num2 && num1 == num3 && num2 == num3){
        document.getElementById("mostnumber").innerHTML = ("The company with the most number of contestants are: Realm of Pastries, Freshly Cooked, and Land of Dough " + "(" + num1 + ")");
    }else if( num1 == num2 && num1 > num3){
            document.getElementById("mostnumber").innerHTML = ("The company with the most number of contestants are: Realm of Pastries, and Freshly Cooked " + "(" + num1 + ")");
    }else if (num1 == num3 && num1 > num2){
        document.getElementById("mostnumber").innerHTML = ("The company with the most number of contestants are: Realm of Pastries, and Land of Dough " + "(" + num1 + ")");
    }else if (num2 == num3 && num2 > num1){
        document.getElementById("mostnumber").innerHTML = ("The company with the most number of contestants are: Freshly Cooked, and Land of Dough " + "(" + num2 + ")");
    }else if (num1 > num2 && num1 > num3){
        document.getElementById("mostnumber").innerHTML = ("The company with the most number of contestants is: Realm of Pastries " + "(" + num1 + ")");
    }else if (num2 > num1 && num2 > num3){
        document.getElementById("mostnumber").innerHTML = ("The company with the most number of contestants is: Freshly Cooked " + "(" + num2 + ")");
    }else if (num3 > num1 && num3 > num2){
        document.getElementById("mostnumber").innerHTML = ("The company with the most number of contestants is: Land of Dough " + "(" + num3 + ")");
    }else if (num1 == 0 && num2 == 0 && num3 ==0 ){
        document.getElementById("mostnumber").innerHTML = ("No one participated for the 2023 Shining Employee Competition.")
    }
    else
        document.getElementById("mostnumber").innerHTML = ("Rigged.")
        var letter = num1;
        switch(letter){
            case 0:
                letter = "A"
                break;
            case 1:
                letter = "A";
                break;
            case 2:
                letter = "B";
                break;
            case 3:
                letter = "C";
                break;
            case 4:
                letter = "D";
                break;
            case 5:
                letter = "E";
                break;
            case 6:
                letter = "F";
                break;
            case 7:
                letter = "G";
                break;
            case 8: 
                letter = "H";
                break;
            case 9:
                letter = "I";
                break;
            case 10:
                letter = "J";
                break;
            case 11:
                letter = "K";
                break;
            case 12:
                letter = "L";
                break;
            case 13:
                letter = "M";
                break;
            case 14: 
                letter = "N";
                break;
            case 15:
                letter = "O";
                break;
            case 16:
                letter = "P";
                break;
            case 17:
                letter = "Q";
                break;
            case 18:
                letter = "R";
                break;
            case 19:
                letter = "S";
                break;
            case 20:
                letter = "T";
                break;
            default:
                letter = "Invalid Value";
                break;  
        }
    document.getElementById("num1thletter").innerHTML = ("The 2023 Shining Employee Award comes from the Land of Dough! The employee's name starts with the letter " + letter + ".");
    var timeMin = num2*num3;
    var timeHrMin = timeMin%60;
    var timeHr = (timeMin - timeHrMin)/60;
    document.getElementById("time").innerHTML = ("The time it took him/her to sell all their company's products was " + "(" + timeMin + " mins): " + 
    timeHr + " hr and " + timeHrMin + " min." );
}
