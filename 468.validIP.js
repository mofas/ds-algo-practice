const ip4 = /^([1-9]\d{0,2}|0)(?:\.([1-9]\d{0,2}|0)){3}$/;
const ip6 = /^([0-9a-fA-F]{1,4})(\:[0-9a-fA-F]{1,4}){7}$/;

// boring question.
var validIPAddress = function(IP) {
  const isIp4 = ip4.exec(IP);
  if (isIp4 && isIp4.slice(1).every(d => parseInt(d, 10) < 256)) return 'IPv4';

  const isIp6 = ip6.exec(IP);
  if (isIp6) return 'IPv6';

  return 'Neither';
};

console.log(validIPAddress('172.16.254.1'));
// "IPv4"

console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334'));
// "IPv6"

console.log(validIPAddress('256.256.256.256'));
// "Neither"
