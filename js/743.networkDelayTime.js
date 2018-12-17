/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

var networkDelayTime = function(times, N, K) {
  const query = new Map();

  for (let i = 0; i < times.length; i++) {
    const [start, end, time] = times[i];
    if (!query.has(start)) query.set(start, []);
    query.get(start).push({ end, time });
  }

  query.forEach((val, key) => {
    query.set(key, val.sort((a, b) => a.time - b.time));
  });
  // console.log(query);

  const timeTable = { [K]: 0 };
  // we should use priority queue for performance
  const queue = [K];

  let acc = 1;

  while (queue.length > 0) {
    const node = queue.shift();
    const departTime = timeTable[node];
    const mapping = query.get(Number(node)) || [];
    // console.log(
    //   queue.reduce((acc, d) => {
    //     return acc + ',' + timeTable[d];
    //   }, '')
    // );
    // console.log(node, departTime);
    // console.log('timeTable', timeTable);
    for (const item of mapping) {
      const { end, time } = item;
      if (timeTable[end] == null) {
        timeTable[end] = departTime + time;
        queue.push(end);
        acc++;
      } else {
        if (timeTable[end] > departTime + time)
          timeTable[end] = departTime + time;
      }
    }
    queue.sort((a, b) => timeTable[a] - timeTable[b]);
  }

  if (acc < N) return -1;
  else {
    let max = 0;
    Object.values(timeTable).forEach(d => {
      max = Math.max(max, d);
    });
    return max;
  }
};

// the best sol from web
// in deed it use minHeap / priority queue for performance
// var networkDelayTime = function(times, N, K) {
//   if (!N || N <= 0 || !times) return 0;

//   let adj = [];

//   for (let i = 0; i < times.length; i++) {
//     let src = times[i][0];
//     let dst = times[i][1];
//     let cost = times[i][2];

//     if (!adj[src]) adj[src] = [];

//     adj[src].push([dst, cost]);
//   }

//   let delay = [];
//   let nodes = [];
//   for (let i = 0; i <= N; i++) {
//     delay[i] = Infinity;
//     nodes[i] = i;
//   }

//   // remove first node, since there is no node "0"
//   nodes.shift();
//   // distance to starting node K is 0
//   delay[K] = 0;

//   let minHeap = new MinHeap(nodes, delay);
//   let count = 0;
//   let max = 0;

//   while (!minHeap.isEmpty()) {
//     let curr = minHeap.extractMin();
//     if (delay[curr] === Infinity) continue;

//     // update stats ****
//     max = Math.max(max, delay[curr]);
//     count++;

//     // update children's path cost
//     let children = adj[curr];
//     if (!children) continue;

//     for (let i = 0; i < children.length; i++) {
//       let childNode = children[i][0];
//       let currToChild = children[i][1];

//       let costThruCurrToChild = delay[curr] + currToChild;

//       delay[childNode] = Math.min(delay[childNode], costThruCurrToChild);
//     }

//     minHeap.heapify();
//   }

//   return count === N ? max : -1;
// };

// class MinHeap {
//   constructor(nodes, delay) {
//     this._items = nodes;
//     this._delay = delay;
//     this.heapify();
//   }

//   extractMin() {
//     return this._items.shift();
//   }

//   lesser(i, j) {
//     return this._delay[this._items[i]] < this._delay[this._items[j]];
//   }

//   bubbleDown(i) {
//     let node = i;
//     let n = this._items.length;
//     let left = i => (i << 1) + 1;
//     let right = i => (i << 1) + 2;

//     while (
//       (node < n && this.lesser(left(node), node)) ||
//       (node < n && this.lesser(right(node), node))
//     ) {
//       // while either child is lesser, we bubble down
//       let smallerChild = node;
//       if (this.lesser(left(node), node)) {
//         smallerChild = left(node);
//       }
//       if (
//         this.lesser(right(node), node) &&
//         this.lesser(right(node), left(node))
//       ) {
//         smallerChild = right(node);
//       }
//       this.swap(smallerChild, node);
//       node = smallerChild + 1;
//     }
//   }

//   heapify() {
//     let n = this._items.length;
//     for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
//       this.bubbleDown(i);
//     }
//   }

//   swap(i, j) {
//     let temp = this._items[i];
//     this._items[i] = this._items[j];
//     this._items[j] = temp;
//   }

//   isEmpty() {
//     return this._items.length === 0;
//   }
// }

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
// 2

console.log(
  networkDelayTime(
    [
      [4, 2, 76],
      [1, 3, 79],
      [3, 1, 81],
      [4, 3, 30],
      [2, 1, 47],
      [1, 5, 61],
      [1, 4, 99],
      [3, 4, 68],
      [3, 5, 46],
      [4, 1, 6],
      [5, 4, 7],
      [5, 3, 44],
      [4, 5, 19],
      [2, 3, 13],
      [3, 2, 18],
      [1, 2, 0],
      [5, 1, 25],
      [2, 5, 58],
      [2, 4, 77],
      [5, 2, 74]
    ],
    5,
    3
  )
);
// 59

console.log(
  networkDelayTime(
    [
      [15, 8, 1],
      [7, 10, 41],
      [7, 9, 34],
      [9, 4, 31],
      [12, 13, 50],
      [14, 3, 52],
      [4, 11, 99],
      [4, 7, 86],
      [10, 13, 57],
      [9, 6, 10],
      [1, 7, 51],
      [7, 15, 38],
      [1, 9, 11],
      [12, 7, 94],
      [9, 13, 34],
      [11, 7, 79],
      [7, 6, 28],
      [5, 3, 34],
      [2, 6, 97],
      [14, 1, 97],
      [6, 10, 90],
      [12, 10, 37],
      [13, 3, 73],
      [11, 14, 7],
      [15, 1, 39],
      [6, 5, 90],
      [13, 6, 43],
      [6, 9, 32],
      [4, 6, 45],
      [11, 10, 2],
      [2, 13, 4],
      [14, 15, 29],
      [1, 14, 88],
      [14, 6, 19],
      [6, 2, 29],
      [3, 14, 72],
      [1, 15, 4],
      [11, 5, 2],
      [6, 7, 56],
      [8, 7, 88],
      [13, 14, 70],
      [14, 12, 58],
      [14, 2, 86],
      [11, 3, 57],
      [5, 2, 56],
      [3, 10, 26],
      [2, 11, 21],
      [14, 5, 54],
      [5, 12, 40],
      [14, 4, 81],
      [15, 2, 99],
      [5, 7, 57],
      [13, 12, 5],
      [4, 9, 60],
      [12, 15, 48],
      [6, 14, 1],
      [9, 7, 44],
      [13, 7, 69],
      [5, 13, 42],
      [4, 1, 7],
      [11, 9, 76],
      [8, 1, 76],
      [5, 14, 29],
      [2, 3, 69],
      [7, 3, 23],
      [12, 14, 28],
      [11, 4, 85],
      [10, 1, 10],
      [15, 12, 36],
      [1, 11, 69],
      [15, 10, 96],
      [11, 13, 69],
      [7, 12, 49],
      [1, 2, 95],
      [6, 4, 46],
      [8, 12, 94],
      [12, 4, 93],
      [13, 5, 31],
      [12, 2, 60],
      [6, 1, 87],
      [4, 14, 20],
      [5, 11, 89],
      [4, 15, 88],
      [4, 10, 21],
      [1, 6, 5],
      [10, 8, 26],
      [8, 2, 51],
      [3, 15, 23],
      [7, 2, 12],
      [11, 1, 47],
      [2, 1, 75],
      [3, 8, 63],
      [8, 10, 19],
      [6, 8, 18],
      [4, 2, 55],
      [14, 11, 80],
      [10, 3, 73],
      [3, 5, 22],
      [12, 3, 61],
      [1, 13, 33],
      [9, 3, 98],
      [9, 12, 69],
      [15, 9, 6],
      [7, 13, 76],
      [11, 12, 22],
      [11, 15, 51],
      [13, 15, 46],
      [5, 10, 58],
      [1, 10, 26],
      [13, 4, 85],
      [7, 14, 58],
      [5, 8, 46],
      [11, 6, 32],
      [10, 9, 41],
      [9, 14, 35],
      [14, 13, 60],
      [3, 9, 97],
      [2, 5, 39],
      [7, 11, 19],
      [1, 12, 27],
      [7, 5, 13],
      [8, 4, 34],
      [9, 15, 25],
      [5, 1, 93],
      [15, 13, 97],
      [14, 9, 35],
      [8, 6, 67],
      [9, 5, 39],
      [13, 11, 35],
      [7, 4, 21],
      [12, 9, 64],
      [14, 8, 8],
      [10, 12, 94],
      [8, 9, 76],
      [8, 5, 71],
      [2, 9, 64],
      [10, 14, 59],
      [1, 4, 74],
      [7, 1, 69],
      [15, 5, 55],
      [6, 15, 80],
      [13, 8, 84],
      [8, 13, 63],
      [8, 3, 91],
      [10, 4, 87],
      [1, 5, 39],
      [8, 11, 0],
      [1, 3, 79],
      [4, 5, 82],
      [4, 12, 87],
      [3, 11, 29],
      [7, 8, 92],
      [10, 7, 77],
      [6, 12, 42],
      [13, 2, 40],
      [9, 10, 13],
      [4, 13, 65],
      [2, 4, 34],
      [3, 13, 44],
      [2, 14, 69],
      [3, 4, 42],
      [5, 15, 98],
      [14, 7, 6],
      [15, 3, 94],
      [10, 2, 37],
      [15, 11, 7],
      [9, 2, 15],
      [13, 9, 66],
      [4, 8, 83],
      [8, 15, 23],
      [13, 1, 50],
      [6, 13, 57],
      [2, 10, 37],
      [10, 6, 38],
      [2, 7, 45],
      [9, 8, 8],
      [3, 12, 28],
      [3, 2, 83],
      [2, 12, 75],
      [1, 8, 91],
      [4, 3, 70],
      [12, 6, 48],
      [3, 1, 13],
      [5, 6, 42],
      [6, 11, 96],
      [3, 6, 22],
      [15, 6, 34],
      [11, 8, 43],
      [15, 7, 40],
      [9, 11, 57],
      [11, 2, 11],
      [2, 8, 22],
      [9, 1, 73],
      [2, 15, 40],
      [12, 11, 10],
      [15, 4, 78],
      [12, 8, 75],
      [10, 15, 37],
      [13, 10, 44],
      [8, 14, 33],
      [3, 7, 82],
      [5, 4, 46],
      [12, 5, 79],
      [15, 14, 43],
      [10, 5, 65],
      [5, 9, 34],
      [12, 1, 54],
      [6, 3, 16],
      [14, 10, 83],
      [10, 11, 67]
    ],
    15,
    8
  )
);
// 34
