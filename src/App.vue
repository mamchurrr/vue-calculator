<template>
    <div id="app">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        />
        {{$calculator}}
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
// import * as calculator from '../plugin/calculator.js';
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
            return this.$calc.sum;
        },
        subtraction () {
            return this.$calc.subtraction;
        },
        division () {
            return this.$calc.division;
        },
        multiplication () {
            return this.$calc.multiplication;
        }
    },
    methods: {
        logicSum (argA, argB) {
            this.$refs.calculate.result = this.$calc.calcSum(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
        logicDivision (argA, argB) {
            this.$refs.calculate.result = this.$calc.calcDivision(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
        logicSubtraction (argA, argB) {
            this.$refs.calculate.result = this.$calc.calcSubtraction(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
        logicMultiplication (argA, argB) {
            this.$refs.calculate.result = this.$calc.calcMultiplication(argA, argB);
            this.result = this.$refs.calculate.result;
            return this.result;
        },
    },
    mounted () {
        // let recaptchaScript = document.createElement('script');
        // recaptchaScript.setAttribute('src', '/calculator.js');
        // document.head.appendChild(recaptchaScript);

    },
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
