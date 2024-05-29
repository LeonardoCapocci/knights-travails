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
        console.log('ADD HER TO THE PILE');
        validJumps.push(newPosition);
      }
    }
    return validJumps;
  }

  if (arraysEqual(start, end)) return start;
  // Checking if start = end

  queue.push([start]);
  positionsExplored.push(start);

  while (queue) {
    // This will be changed to while queue
    // console.log(queue[0][queue.length - 1]);
    const validMoves = knightJumps(
      queue[0][queue.length - 1],
      positionsExplored,
    );
    for (const move of validMoves) {
      queue.push([...queue[0]]);
      queue[queue.length - 1].push(move);
      if (arraysEqual(move, end)) return queue[queue.length - 1];
      positionsExplored.push(move);
    }
    queue.shift();
    console.log('TESTESTEST');
    console.log([...queue]);
  }
}

console.log(knightMoves([0, 0], [4, 5]));
