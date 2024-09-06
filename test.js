function crosswordSolver(puzzle, words) {
    // Input validation
    if (!isValidPuzzle(puzzle) || !isValidWordList(words)) {
      return "Error";
    }
    // Parse the puzzle
    const grid = parsePuzzle(puzzle);
    let slots = identifyWordSlots(grid);
    // Check if number of slots matches number of words
    if (slots.length !== words.length) {
      return "Error";
    }
    // Sort slots by length (descending) for optimization
    slots.sort((a, b) => b.length - a.length);
    // Attempt to solve the puzzle
    const solution = solve(grid, slots, words);
    
    if (solution === null) {
      return "Error"; // No unique solution found
    }
    // Convert solution back to string format
    return solutionToString(solution);
  }
  function identifyWordSlots(grid) {
    const slots = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (/^[12]$/.test(grid[i][j])) {
                // Check for horizontal slot
                if ((j === 0 || grid[i][j - 1] === '.') && (j + 1 < grid[i].length && grid[i][j + 1] !== '.')) {
                    const horizontalSlot = findHorizontalSlot(grid, i, j);
                    if (horizontalSlot) {
                        slots.push(horizontalSlot);
                    }
                }
                // Check for vertical slot
                if ((i === 0 || grid[i - 1][j] === '.') && (i + 1 < grid.length && grid[i + 1][j] !== '.')) {
                    const verticalSlot = findVerticalSlot(grid, i, j);
                    if (verticalSlot) {
                        slots.push(verticalSlot);
                    }
                }
            }
        }
    }
    // console.log(`Total slots identified: ${slots.length}`);
    return slots;
  }
  function findHorizontalSlot(grid, i, j) {
    let length = 0;
    while (j + length < grid[i].length && grid[i][j + length] !== '.') {
        length++;
    }
    if (length > 1) {
        return { row: i, col: j, length, isHorizontal: true };
    }
    return null;
  }
  function findVerticalSlot(grid, i, j) {
    let length = 0;
    while (i + length < grid.length && grid[i + length][j] !== '.') {
        length++;
    }
    if (length > 1) {
        return { row: i, col: j, length, isHorizontal: false };
    }
    return null;
  }
  function isValidPuzzle(puzzle) {
    if (typeof puzzle !== 'string' || puzzle.trim() === '') return false;
    const lines = puzzle.trim().split('\n');
    const width = lines[0].length;
    return lines.every(line => 
      line.length === width && 
      /^[012.\n]+$/.test(line) // Only allow 0, 1, 2, and .
    );
  }
  function isValidWordList(words) {
    if (!Array.isArray(words) || words.length === 0) return false;
    const uniqueWords = new Set(words);
    return uniqueWords.size === words.length && words.every(word => /^[a-zA-Z]+$/.test(word));
  }
  function parsePuzzle(puzzle) {
    return puzzle.trim().split('\n').map(line => line.split(''));
  }
  function solve(grid, slots, words) {
    let solutions = 0;
    let finalSolution = null;
    const usedWords = new Set();
    function backtrack(index) {
      if (index === slots.length) {
        solutions++;
        if (solutions > 1) return true; // Multiple solutions found
        finalSolution = JSON.parse(JSON.stringify(grid));
        return false;
      }
      const currentSlot = slots[index];
      for (let word of words) {
        if (usedWords.has(word) || word.length !== currentSlot.length) continue;
        if (canPlaceWord(grid, currentSlot, word)) {
          placeWord(grid, currentSlot, word);
          usedWords.add(word);
          if (backtrack(index + 1)) return true; // Continue if multiple solutions found
          // Backtrack: remove the word if it doesn't lead to a solution
          removeWord(grid, currentSlot);
          usedWords.delete(word);
        }
      }
      return false;
    }
    backtrack(0);
    return solutions === 1 ? finalSolution : null;
  }
  function canPlaceWord(grid, slot, word) {
    for (let i = 0; i < word.length; i++) {
      const row = slot.isHorizontal ? slot.row : slot.row + i;
      const col = slot.isHorizontal ? slot.col + i : slot.col;
      const currentCell = grid[row][col];
      if (currentCell !== '.' && currentCell !== word[i] && !/^[012]$/.test(currentCell)) {
        return false;
      }
    }
    return true;
  }
  function placeWord(grid, slot, word) {
    for (let i = 0; i < word.length; i++) {
      const row = slot.isHorizontal ? slot.row : slot.row + i;
      const col = slot.isHorizontal ? slot.col + i : slot.col;
      grid[row][col] = word[i];
    }
  }
  function removeWord(grid, slot) {
    for (let i = 0; i < slot.length; i++) {
      const row = slot.isHorizontal ? slot.row : slot.row + i;
      const col = slot.isHorizontal ? slot.col + i : slot.col;
      grid[row][col] = grid[row][col] === '.' ? '.' : (i === 0 ? slot.length.toString() : '0');
    }
  }
  function solutionToString(solution) {
    return solution.map(row => row.join('')).join('\n');
  }
   const puzzle = '2001\n0..0\n1000\n0..0'
   const words = ['casa', 'alan', 'ciao', 'anta']
  console.log(crosswordSolver(puzzle,words))