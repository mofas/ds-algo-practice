function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function bin2dec(bin) {
  let ret = 0;
  for (let i = 0; i < bin.length; i++) {
    ret *= 2;
    if (bin[i] === '1') ret += 1;
  }
  return ret;
}

module.exports = {
  dec2bin,
  bin2dec
};
