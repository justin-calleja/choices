[![NPM](https://nodei.co/npm/@justinc/choices.png)](https://nodei.co/npm/@justinc/choices/)

[Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) wrapper for asking user to select from a list of choices.

## Installation

```shell
npm install @justinc/choices
```

## Usage

```js
require('@justinc/choices')({ message: 'Make your selection' }).then(answer => {
  console.log('You chose:', answer.choice);
});
```

```js
require('@justinc/choices')({ message: 'Make your selection', choices: ['blue pill', 'red pill'] }).then(answer => {
  console.log('You chose:', answer.choice);
});
```

## Object Argument:

- **type**: See `type` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `'list'`)
- **name**: See `name` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `'choice'`)
- **message**: See `message` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `'Select one of the following'`)
- **default**: See `default` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `['yes', 'no', 'skip'])

