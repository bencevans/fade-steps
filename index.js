
function fadeSteps (startHex, finishHex, steps) {
  var startRgb = hexToRgb(startHex);
  var finishRgb = hexToRgb(finishHex);
  steps = steps - 1;
  var outputSteps = [];
  for (var i = 0; i <= steps; i++) {
    var pointFromStart = i / steps;
    var pointFromFinish = 1- pointFromStart;
    outputSteps.push(rgbToHex((startRgb[0] * pointFromFinish) + (finishRgb[0] * pointFromStart),
    (startRgb[1] * pointFromFinish) + (finishRgb[1] * pointFromStart),
    (startRgb[2] * pointFromFinish) + (finishRgb[2] * pointFromStart)));
  }
  return outputSteps
}

function rgbToHex(r, g, b) {
  return '#' + Math.round(r).toString(16) + Math.round(g).toString(16) + Math.round(b).toString(16);
}

function hexToRgb(str) {
  str = str.match(/^#?([0-9|a-f]{3,6})$/i);

  if(!str || str[1].length !== 3 && str[1].length !== 6)
    throw new Error('Invalid Colour Hex');

  str = str[1];

  var out = [0, 0, 0];

  out[0] = str.substr(0, str.length / 3);
  out[1] = str.substr(str.length / 3, str.length / 3);
  out[2] = str.substr((str.length / 3) * 2, str.length / 3);

  for (var i = 0; i < out.length; i++) {
    if(out[i].length === 1)
      out[i] += out[i];
    out[i] = parseInt(out[i], 16);
  };

  return out;
}

module.exports = fadeSteps;
module.exports.rgbToHex = rgbToHex;
module.exports.hexToRgb = hexToRgb;