<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <Calculate
            ref="calculate"
            sum="withLogic"
            subtraction
            @logicSum="logicSum"
            title="Welcome to Your Calculate Vue.js App"
        />
    </div>
</template>

<script>
import Calculate from './components/Calculate.vue';

export default {
    name: 'app',
    components: {
        Calculate
    },
    data() {
        return {
            result: 0
        };
    },
    methods: {
        logicSum(argA, argB) {
            this.$refs.calculate.result = argA + argB + 1;
            this.result = this.$refs.calculate.result;
            return this.result;
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
