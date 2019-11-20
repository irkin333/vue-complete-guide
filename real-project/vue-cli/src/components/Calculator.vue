<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>CALCULATOR</h1>
        <div class="calculator">
          <form>
            <div class="form-group col-xs-6">
              <input type="number" class="form-control" v-model="a">
            </div>
            <div class="form-group col-xs-6">
              <input type="number" class="form-control" v-model="b">
            </div>
          </form>
          <button type="button" class="btn btn-success" @click="calculate('plus')">ADD</button>
          <button type="button" class="btn btn-info" @click="calculate('minus')">EXTRACT</button>
          <button type="button" class="btn btn-primary" @click="calculate('multiply')">MULTIPLY</button>
          <button type="button" class="btn btn-secondary" @click="calculate('divide')">DIVIDE</button>
        </div>

        <div class="alert alert-primary" role="alert" v-show="result.length">
          {{ result }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const CalculatorFactory = () => {
    return {
      plus(a, b) { return this.output(a+b); },
      minus(a, b) { return this.output(a-b); },
      multiply(a, b) { return this.output(a*b) },
      divide(a, b) { return this.output(a/b) },
      output(result) {
        return 'Current result of calculation is: ' + result;
      }
    }
  }

  export default {
    data() {
      return {
        a: 0,
        b: 0,
        result: '',
        calculator: new CalculatorFactory(),
      }
    },
    methods: {
      calculate(operation) {
        this.result = this.calculator[operation](this.a, this.b);
      }
    }
  }
</script>
