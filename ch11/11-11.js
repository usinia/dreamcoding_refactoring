export function ascentVelocity(points, totalMinutes) {
  function calculateAscent(points) {
    const result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscent(points, [
    { elevation: 10 },
    { elevation: 20 },
  ]);

  return totalAscent / totalMinutes;
}
