/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

// 148ms slow
var findItinerary = function(tickets) {
  const visitedCount = {};
  const stayCount = {};
  const flyMapping = new Map();
  let flyCount = 0;
  tickets.forEach(([from, to]) => {
    visitedCount[`${from}-${to}`] = visitedCount[`${from}-${to}`] || 0;
    visitedCount[`${from}-${to}`]++;
    stayCount[from] = stayCount[from] || 0;
    stayCount[to] = stayCount[to] || 0;
    stayCount[from]++;
    stayCount[to]--;
    if (!flyMapping.has(from)) flyMapping.set(from, []);
    flyMapping.get(from).push(to);
    flyCount++;
  });

  for (let [key, val] of flyMapping) {
    val.sort();
  }
  // console.log(flyMapping);

  let ret = [];
  const dfs = stack => {
    // console.log(stack, visitedCount);
    if (stack.length === flyCount + 1) {
      ret = stack.slice();
      return true;
    }

    const current = stack[stack.length - 1];
    const possibleDest = (flyMapping.get(current) || []).filter(
      to => visitedCount[`${current}-${to}`] > 0
    );

    for (let i = 0; i < possibleDest.length; i++) {
      stack.push(possibleDest[i]);
      visitedCount[`${current}-${possibleDest[i]}`]--;
      if (dfs(stack)) return true;
      stack.pop();
      visitedCount[`${current}-${possibleDest[i]}`]++;
    }

    return false;
  };

  dfs(['JFK']);

  return ret;
};

// best sol from web
// 76ms
// var findItinerary = function(tickets) {
//   if (!tickets) return null;
//   let result = [];
//   // initializ hash with JFK as from, value as array so we can manipulate easily with push/pop;
//   let hash = { JFK: [] };

//   for (let i = 0; i <= tickets.length - 1; i++) {
//     let t_from = tickets[i][0];
//     let t_to = tickets[i][1];
//     if (!hash[t_from]) hash[t_from] = [];
//     hash[t_from].push(t_to);
//   }

//   for (let prop in hash) hash[prop].sort();

//   // recursion with DFS
//   makeTickets('JFK');

//   function makeTickets(from) {
//     let tos = hash[from];
//     // use while loop to remove the one has visited one by one
//     while (tos && tos.length > 0) makeTickets(tos.shift());
//     // add the destination back after recursion finished
//     result.unshift(from);
//   }
//   return result;
// };

console.log(findItinerary([['JFK', 'ATL'], ['ATL', 'JFK']]));
// ['ATL', 'JFK', 'ATL'];

console.log(findItinerary([['JFK', 'KUL'], ['JFK', 'NRT'], ['NRT', 'JFK']]));
// ['JFK', 'NRT', 'JFK', 'KUL'];

console.log(
  findItinerary([
    ['MUC', 'LHR'],
    ['JFK', 'MUC'],
    ['SFO', 'SJC'],
    ['LHR', 'SFO']
  ])
);
// ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'];

console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO']
  ])
);
// ["JFK","ATL","JFK","SFO","ATL","SFO"]
