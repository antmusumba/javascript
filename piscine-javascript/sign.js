function sign(num) {
    if (num > 0) return 1;
    if (num < 0) return -1;
    return 0;
}

function sameSign(num1, num2) {
    return sign(num1) === sign(num2);
}
