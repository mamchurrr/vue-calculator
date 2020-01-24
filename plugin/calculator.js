const sum = 'withLogic';
const subtraction = true;
const multiplication = false;
const division = 'withLogic';

const calcSum = (argA, argB) => {
    return argA + argB + 7;
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

//Все выше можно получать с сервера, тогда пересборки не будет.
// есть вариант подключать тег скрипт в html путем монтирование из компонента или просто напрямую в html файле
// и добавлять эти переменные в объект window - так же из него доставать переменные в компоненте, но это работает у меня только в дев режиме.
// на продакшн режиме почему то нет доступа внутрь объекта window - пока не понял почему.
//Но через глобальные переменные работать как то не очень.

//ИМХО Считаю лучшим вариантом работать через запросы к серверу или какието облачные функции -
//помоему там проблем подключения таким способом не должно быть

export default {
    install(Vue) {
        Vue.prototype.$calc = {
            sum,
            subtraction,
            multiplication,
            division,
            calcSum,
            calcSubtraction,
            calcMultiplication,
            calcDivision
        };
    }
};