function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function bin2dec(bin) {
  return parseInt(bin, 2);
}

module.exports = {
  dec2bin,
  bin2dec
};
