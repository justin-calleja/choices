// require('@justinc/choices') elsewhere
require('.')({ message: 'Make your selection' }).then(answer => {
  console.log('You chose:', answer.choice);
});
