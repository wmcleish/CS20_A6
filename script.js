
function sum(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
}

function is_factor (x, y) {
    return x % y == 0;
}

function all_factors (x) {
    var factors = [];
    for (var i = 0; i < x; i++) {
        if (is_factor(x, i)){
            factors.push(i);
        }
    }
    return factors;
}

function isAmicable (x, y) {
    if (x < 0){
        x *= -1;
    }else if (y < 0){
        y *= -1;
    }
    var arrx = all_factors(x);
    var arry = all_factors(y);
    return sum(arrx) == y && sum(arry) == x
}

function display_script() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    if (x == y){
        document.write("<div>The numbers: " + x + " and " + y + "are the same number!</div>");
    }else if (isAmicable(x, y)) {
        arrx = all_factors(x);
        arry = all_factors(y);
        document.write("<div>The numbers: " + x + " and " + y + "are amicable</div>");
        document.write("<div>The factors of " + x + " are " + arrx + "<br>");
        document.write("<div>The factors of " + y + " are " + arry + "</div>");
    }else{
        document.write("<div>The numbers: " + x + " and " + y + "are not amicable</div>");
    }
}