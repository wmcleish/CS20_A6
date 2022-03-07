

function isAmicable (x, y) {
    var arrx = all_factors(x);
    var arry = all_factors(y);
    return sum(arrx) == y && sum(arry) == x
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

function is_factor (x, y) {
    return x % y == 0;
}


function display_script(x, y) {
    var x = amicable.x.value;
    var y = amicable.y.value;
    if (isAmicable(x, y)) {
        arrx = all_factors(x);
        arry = all_factors(y);
        document.write("<div>The numbers: " + x + " and " + y + "are amicable</div>");
        document.write("<div>The factors of " + x + " are " + arrx + "<br>");
        document.write("<div>The factors of " + y + " are " + arry + "</div>");
    }else{
        document.write("<div>The numbers: " + x + " and " + y + "are not amicable</div>");
    }
}