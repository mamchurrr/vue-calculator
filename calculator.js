const sum = 'withLogic';
const subtraction = true;
const multiplication = false;
const division = 'withLogic';

const calcSum = (argA, argB) => {
    return argA + argB + 6;
};
const calcSubtraction = (argA, argB) => {
    return argA - argB + 1;
};
const calcMultiplication = (argA, argB) => {
    return argA * argB + 1;
};
const calcDivision = (argA, argB) => {
    let errMesage = validDivision(argA, argB);
    if (!errMesage) return argA / argB + 1;
    else return errMesage;
};

const validDivision = (argA, argB) => {
    if (argB === 0) return 'на ноль делить нельзя';
    return false;
};

export {
    sum,
    subtraction,
    multiplication,
    division,
    calcSum,
    calcSubtraction,
    calcMultiplication,
    calcDivision
};