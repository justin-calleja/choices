var inquirer = require('inquirer');

module.exports = (args) => {
  args.type = args.type || 'list';
  args.name = args.name || 'choice';
  args.message = args.message || 'Select one of the following';
  args.choices = args.choices || ['yes', 'no', 'skip'];
  
  var prompt = inquirer.createPromptModule();
  return prompt([
    {
      type: args.type,
      name: args.name,
      message: args.message,
      choices: args.choices
    }
  ]);
};
