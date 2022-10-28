const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  return parseFloat(cTemp.toFixed(1));
};

const ctof = function(cTemp) {
  let fTemp = cTemp * 9/5 + 32;
  return parseFloat(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
