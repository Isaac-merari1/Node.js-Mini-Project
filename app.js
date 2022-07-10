console.log('My %s has %d ears', 'cat', 2)

const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + ' and has been checked .. how many times?'
)

const orange = ['orange', 'orange']
const apple = ['just one apple']
orange.forEach((fruit) => {
  console.count(fruit)
})
apple.forEach((fruit) => {
  console.count(fruit)
})

const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach((fruit) => {
  console.count(fruit)
})
apples.forEach((fruit) => {
  console.count(fruit)
})

console.countReset('orange')

oranges.forEach((fruit) => {
  console.count(fruit)
})

// const function2 = ()=> console.trace();
// const function1 = ()=> function2()
// function1()

const doSomething = () => console.log('test');
const measureDoingSomething = () => {
    console.time('doSomething()');
    doSomething();
    console.timeEnd('doSomething');
}
measureDoingSomething()

console.log('\x1b[33m%s\x1b[0m', 'hi!')

const chalk = require('chalk')
console.log(chalk.red('hi!'))