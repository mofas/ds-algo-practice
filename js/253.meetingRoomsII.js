function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
// 96ms 20.51%
var minMeetingRooms = function(intervals) {
  const rooms = [];
  intervals.sort((a, b) => a.start - b.start);
  // console.log(intervals);
  for (const interval of intervals) {
    let merged = false;
    // we need to save the gap
    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i];
      if (interval.start >= room) {
        merged = true;
        rooms[i] = interval.end;
        break;
      }
    }
    if (!merged) {
      rooms.push(interval.end);
    }
    // console.log(rooms);
  }
  return rooms.length;
};

// best
// 68ms
// almost the same
// var minMeetingRooms = function(intervals) {
//   const rooms = [];
//   intervals.sort((a, b) => a.start - b.start);
//   console.log(intervals);
//   meetingsLoop: for (let meeting of intervals) {
//     for (let i = 0; i < rooms.length; i++) {
//       if (rooms[i].end <= meeting.start) {
//         rooms[i] = meeting;
//         continue meetingsLoop;
//       }
//     }
//     rooms.push(meeting);
//   }
//   return rooms.length;
// };

// console.log(minMeetingRooms([new Interval(13, 15), new Interval(1, 13)]));
// // 1

// console.log(minMeetingRooms([new Interval(7, 10), new Interval(2, 4)]));
// // 1

// console.log(
//   minMeetingRooms([
//     new Interval(0, 30),
//     new Interval(5, 10),
//     new Interval(15, 20)
//   ])
// );
// // 2

console.log(
  minMeetingRooms([
    new Interval(2, 15),
    new Interval(36, 45),
    new Interval(9, 29),
    new Interval(16, 23),
    new Interval(4, 9)
  ])
);
// 2

console.log(
  minMeetingRooms([
    new Interval(2, 15),
    new Interval(36, 45),
    new Interval(9, 29),
    new Interval(16, 23),
    new Interval(4, 9)
  ])
);
// 2

console.log(
  minMeetingRooms([
    new Interval(0, 30),
    new Interval(5, 10),
    new Interval(15, 20),
    new Interval(11, 28),
    new Interval(4, 27)
  ])
);
// 4

// console.log(
//   minMeetingRooms([
//     new Interval(64738, 614406),
//     new Interval(211748, 780229),
//     new Interval(208641, 307338),
//     new Interval(499908, 869489),
//     new Interval(218907, 889449),
//     new Interval(177201, 481150),
//     new Interval(123679, 384415),
//     new Interval(120440, 404695),
//     new Interval(191810, 491295),
//     new Interval(800783, 826206),
//     new Interval(165175, 221995),
//     new Interval(420412, 799259),
//     new Interval(484168, 617671),
//     new Interval(746410, 886281),
//     new Interval(765198, 792311),
//     new Interval(493853, 971285),
//     new Interval(194579, 313372),
//     new Interval(119757, 766274),
//     new Interval(101315, 917883),
//     new Interval(557309, 599256),
//     new Interval(167729, 723580),
//     new Interval(731216, 988021),
//     new Interval(225883, 752657),
//     new Interval(588461, 854166),
//     new Interval(231328, 285640),
//     new Interval(772811, 869625),
//     new Interval(892212, 973218),
//     new Interval(143535, 306402),
//     new Interval(336799, 998119),
//     new Interval(65892, 767719),
//     new Interval(380440, 518918),
//     new Interval(321447, 558462),
//     new Interval(54489, 234291),
//     new Interval(43934, 44986),
//     new Interval(11260, 968186),
//     new Interval(248987, 707178),
//     new Interval(355162, 798511),
//     new Interval(661962, 781083),
//     new Interval(149228, 412762),
//     new Interval(71084, 953153),
//     new Interval(44890, 655659),
//     new Interval(708781, 956341),
//     new Interval(251847, 707658),
//     new Interval(650743, 932826),
//     new Interval(561965, 814428),
//     new Interval(697026, 932724),
//     new Interval(583473, 919161),
//     new Interval(463638, 951519),
//     new Interval(769086, 785893),
//     new Interval(17912, 923570),
//     new Interval(423089, 653531),
//     new Interval(317269, 395886),
//     new Interval(412117, 701471),
//     new Interval(465312, 520002),
//     new Interval(168739, 770178),
//     new Interval(624091, 814316),
//     new Interval(143729, 249836),
//     new Interval(699196, 879379),
//     new Interval(585322, 989087),
//     new Interval(501009, 949840),
//     new Interval(424092, 580498),
//     new Interval(282845, 345477),
//     new Interval(453883, 926476),
//     new Interval(392148, 878695),
//     new Interval(471772, 771547),
//     new Interval(339375, 590100),
//     new Interval(110499, 619323),
//     new Interval(8713, 291093),
//     new Interval(268241, 283247),
//     new Interval(160815, 621452),
//     new Interval(168922, 810532),
//     new Interval(355051, 377247),
//     new Interval(10461, 488835),
//     new Interval(220598, 261326),
//     new Interval(403537, 438947),
//     new Interval(221492, 640708),
//     new Interval(114702, 926457),
//     new Interval(166567, 477230),
//     new Interval(856127, 882961),
//     new Interval(218411, 256327),
//     new Interval(184364, 909088),
//     new Interval(130802, 828793),
//     new Interval(312028, 811716),
//     new Interval(294638, 839683),
//     new Interval(269329, 343517),
//     new Interval(167968, 391811),
//     new Interval(25351, 369583),
//     new Interval(210660, 454598),
//     new Interval(166834, 576380),
//     new Interval(296440, 873280),
//     new Interval(660142, 822072),
//     new Interval(33441, 778393),
//     new Interval(456500, 955635),
//     new Interval(59220, 954158),
//     new Interval(306295, 429913),
//     new Interval(110402, 448322),
//     new Interval(44523, 88192),
//     new Interval(231386, 353197),
//     new Interval(120940, 902781),
//     new Interval(348758, 597599),
//     new Interval(329467, 664450),
//     new Interval(208411, 890114),
//     new Interval(230238, 516885),
//     new Interval(434113, 602358),
//     new Interval(349759, 419831),
//     new Interval(10689, 308144),
//     new Interval(94526, 180723),
//     new Interval(435280, 986655),
//     new Interval(611999, 690154),
//     new Interval(75208, 395348),
//     new Interval(403243, 489260),
//     new Interval(498884, 611075),
//     new Interval(487209, 863242),
//     new Interval(13900, 873774),
//     new Interval(656706, 782943),
//     new Interval(53478, 586952),
//     new Interval(226216, 723114),
//     new Interval(554799, 922759),
//     new Interval(467777, 689913),
//     new Interval(80630, 147482),
//     new Interval(277803, 506346),
//     new Interval(532240, 976029),
//     new Interval(206622, 761192),
//     new Interval(148277, 985819),
//     new Interval(10879, 807349),
//     new Interval(952227, 971268),
//     new Interval(172074, 919866),
//     new Interval(239230, 384499),
//     new Interval(607687, 984661),
//     new Interval(4405, 264532),
//     new Interval(41071, 437502),
//     new Interval(432603, 661142),
//     new Interval(144398, 907360),
//     new Interval(139605, 360037),
//     new Interval(943191, 997317),
//     new Interval(12894, 171584),
//     new Interval(382477, 800157),
//     new Interval(452077, 518175),
//     new Interval(208007, 398880),
//     new Interval(375250, 489928),
//     new Interval(384503, 726837),
//     new Interval(278181, 628759),
//     new Interval(114470, 635575),
//     new Interval(382297, 733713),
//     new Interval(156559, 874172),
//     new Interval(507016, 815520),
//     new Interval(164461, 532215),
//     new Interval(17332, 536971),
//     new Interval(418721, 911117),
//     new Interval(11497, 1403)
//   ])
// );
// // 77
