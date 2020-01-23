<template>
    <div id="app">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        />
        <Calculate
            ref="calculate"
            :sum="sum"
            :subtraction="subtraction"
            :division="division"
            :multiplication="multiplication"
            @logicSum="logicSum"
            @logicDivision="logicDivision"
            @logicSubtraction="logicSubtraction"
            @logicMultiplication="logicMultiplication"
            title="Welcome to Your Calculate Vue.js App"
        />
    </div>
</template>

<script>
import * as calculator from '../calculator';
import Calculate from './components/Calculate.vue';

export default {
    name: 'app',
    components: {
        Calculate
    },
    data () {
        return {
            result: 0
        };
    },
    computed: {
        sum () {
            return calculator.sum;
        },
        subtraction () {
            return calculator.subtraction;
        },
        division () {
            return calculator.division;
        },
        multiplication () {
            return calculator.multiplication;
        }
    },
    methods: {
        logicSum (argA, argB) {
            this.$refs.calculate.result = calculator.calcSum(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
        logicDivision (argA, argB) {
            this.$refs.calculate.result = calculator.calcDivision(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
        logicSubtraction (argA, argB) {
            this.$refs.calculate.result = calculator.calcSubtraction(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
        logicMultiplication (argA, argB) {
            this.$refs.calculate.result = calculator.calcMultiplication(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
