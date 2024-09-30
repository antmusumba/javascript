function sameAmount(s, a, b) {
    const regexA = new RegExp(a.source, 'g');
    const regexB = new RegExp(b.source, 'g');
  
    const matchesA = [...s.matchAll(regexA)].length;
    const matchesB = [...s.matchAll(regexB)].length;
  
    return matchesA === matchesB;
  }