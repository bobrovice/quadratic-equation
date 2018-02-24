module.exports = function solveEquation(equation) {

    let coefficient = equation.replace(/\s/g, '').match(/[^\^]\d+/g);
    let a = coefficient[0];
        b = coefficient[1];
        c = coefficient[2];
    let bSqr = b * b;
    let coef = 4 * a * c;

    //discriminant D = b^2 - 4ac
    const D = Math.sqrt(bSqr - coef);

    if (D > 0){
        return [(-b - D) / (2 * a),(-b + D) / (2 * a)].map(x =>
        Math.round(x)).sort((x1, x2) => x1 - x2)}

    //if (D == 0){
    //    return [(-b / (2 * a))].map(x =>
    //    Math.round(x)).sort((x1,x2) => x1 == x2)}
    //if (D < 0){
    //    return 'no roots on the set of real numbers'}
};
