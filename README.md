# fade-steps

> Generate an array of steps for fading between colours

## Install

    $ npm install --save fade-steps

## Usage

```js
const fadeSteps = require('fade-steps')

const startColour = '000000'
const endColour = 'ff00ff'
const stepCount = 5

const colours = fadeSteps(startColour, endColour, stepCount)

console.log(colours)
/*
[ '000000', '400040', '800080', 'bf00bf', 'ff00ff' ]
*/
```

## Licence

MIT © [Ben Evans](http://bensbit.co.uk)
