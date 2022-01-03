/**
 * @param {number[][]} points
 * @return {number}
 */
// var numberOfBoomerangs = function (points) {
//   if (points.length === 0) return;
//   let res = 0;
//   for (let i = 0; i < points.length; i++) {
//     for (let j = 0; j < points.length; j++) {
//       if (i === j) continue;
//       for (let k = 0; k < points.length; k++) {
//           if (k === i || k === j) continue;

//         if (
//           getDistance(points[i], points[j]) ===
//           getDistance(points[i], points[k])
//         ) {
//           res++;
//         }

//       }
//     }
//   }
//     return res;
// };

var numberOfBoomerangs = function (points) {
  let map = new Map();
  let res = 0;
  if (points === null) return;

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      let distance = getDistance(points[i], points[j]);

      map.set(distance, (map.get(distance) ?? 0) + 1);
    }

    for (let count of map.values()) {
      res += count * (count - 1);
    }

    map.clear();
  }

  return res;
};

var getDistance = function (x, y) {
  let x1 = y[0] - x[0];
  let y1 = y[1] - x[1];
  return x1 * x1 +  y1* y1;
};

console.log(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0],
  ])
);
