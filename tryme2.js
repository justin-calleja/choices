// require('@justinc/choices') elsewhere
require('.')({ message: 'Make your selection', choices: ['blue pill', 'red pill'] }).then(answer => {
  console.log('You chose:', answer.choice);
});
