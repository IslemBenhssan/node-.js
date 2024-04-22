const generatePassword = require('generate-password');

const password = generatePassword.generate(
    {
        length: 25,
        numbers: true,
        symbols:true,
        uppercase:true,
      }
);

console.log('Generated Password:', password);

