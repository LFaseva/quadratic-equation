module.exports = function solveEquation(equation) {
	let regExp = /\s?-?\s?\d+/g;
    let devisionStr = equation.match(regExp);
    const a = devisionStr[0];
    const b = devisionStr[2].split(' ').join('');
    const c = devisionStr[3].split(' ').join('');
    if (devisionStr[1] !== '2') {
        throw "There is not quadratic equation"
    }
    const D = Math.round(Math.sqrt(Math.pow(b, 2) - 4 * a * c));
    if (isNaN(D)) {
        throw "There is no solution"
    }
    const x1 = (-b + D) / (2 * a);
    const x2 = (-b - D) / (2 * a);
    const res = [x1, x2];
    return res.sort((a, b) => a - b);
}
