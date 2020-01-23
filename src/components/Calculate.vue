<template>
    <div class="hello">
        <h1>{{ title }}</h1>
        <input
            type="number"
            v-model.number="argA"
        />
        <input
            type="number"
            v-model.number="argB"
        />

        <button
            v-if="!!sum"
            @click="calcSum"
        >
            сумма
        </button>
        <button
            v-if="!!subtraction"
            @click="calcSubtraction"
        >
            вычитание
        </button>
        <button
            v-if="!!multiplication"
            @click="calcMultiplication"
        >
            умножение
        </button>
        <button
            v-if="!!division"
            @click="calcDivision"
        >
            деление
        </button>

        <p>Результат: {{ result }}</p>
    </div>
</template>

<script>
export default {
    name: 'Calculate',
    props: {
        title: String,
        sum: {
            type: [Boolean, String],
            default: true,
            validator: function (value) {
                if (typeof value !== 'boolean') {
                    // The value must match one of these strings
                    return ['withLogic'].indexOf(value) !== -1;
                }
                return true;
            }
        },
        subtraction: {
            type: [Boolean, String],
            default: false,
            validator: function (value) {
                if (typeof value !== 'boolean') {
                    // The value must match one of these strings
                    return ['withLogic'].indexOf(value) !== -1;
                }
                return true;
            }
        },
        multiplication: {
            type: [Boolean, String],
            default: false,
            validator: function (value) {
                if (typeof value !== 'boolean') {
                    // The value must match one of these strings
                    return ['withLogic'].indexOf(value) !== -1;
                }
                return true;
            }
        },
        division: {
            type: [Boolean, String],
            default: false,
            validator: function (value) {
                if (typeof value !== 'boolean') {
                    // The value must match one of these strings
                    return ['withLogic'].indexOf(value) !== -1;
                }
                return true;
            }
        }
    },
    data () {
        return {
            result: 0,
            argA: 0,
            argB: 0
        };
    },
    methods: {
        calcSum () {
            switch (this.sum) {
                case 'withLogic':
                    this.$emit('logicSum', this.argA, this.argB);
                    break;
                default:
                    this.result = this.argA + this.argB;
                    break;
            }
        },
        calcSubtraction () {
            switch (this.subtraction) {
                case 'withLogic':
                    this.$emit('logicSubtraction', this.argA, this.argB);
                    break;
                default:
                    this.result = this.argA - this.argB;
                    break;
            }
        },
        calcMultiplication () {
            switch (this.multiplication) {
                case 'withLogic':
                    this.$emit('logicMultiplication', this.argA, this.argB);
                    break;
                default:
                    this.result = this.argA * this.argB;
                    break;
            }
        },
        calcDivision () {
            switch (this.division) {
                case 'withLogic':
                    this.$emit('logicDivision', this.argA, this.argB);
                    break;
                default:
                    this.result = this.argA / this.argB;
                    break;
            }
        },

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
