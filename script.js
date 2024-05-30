function knightMoves(start, end) {
  const positionsExplored = [];
  const queue = [];

  function arraysEqual(a, b) {
    // Helper function to determine if a possition array is equal to the end array
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function knightJumps(startPos, explored) {
    // Returns array of all possible single jump positions from given start position
    const exploredSet = new Set(explored.map((coords) => coords.toString()));
    const possibleMoves = [
      [1, 2],
      [1, -2],
      [2, 1],
      [2, -1],
      [-1, 2],
      [-1, -2],
      [-2, 1],
      [-2, -1],
    ];
    const validJumps = [];
    const [x, y] = startPos;

    for (const [dx, dy] of possibleMoves) {
      const newX = x + dx;
      const newY = y + dy;
      const newPosition = [newX, newY];
      if (
        newX >= 0 &&
        newX <= 7 &&
        newY >= 0 &&
        newY <= 7 &&
        !exploredSet.has(newPosition.toString())
      ) {
        validJumps.push(newPosition);
      }
    }
    return validJumps;
  }

  if (arraysEqual(start, end)) return start;
  // Checking if start = end

  positionsExplored.push(start);
  queue.push([start]);

  while (queue.length > 0) {
    // While there are unexplored positions, run the loop
    const currentPath = queue.shift();
    const currentPos = currentPath[currentPath.length - 1];
    const validMoves = knightJumps(currentPos, positionsExplored);
    for (const move of validMoves) {
      const newPath = [...currentPath, move];
      if (arraysEqual(move, end)) return newPath;
      // Ends loop if end point is found
      queue.push(newPath);
      positionsExplored.push(move);
    }
  }
  return 'No path found';
}

console.log(knightMoves([0, 0], [1, 1]));
