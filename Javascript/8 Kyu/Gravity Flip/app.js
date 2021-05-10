const flip=(d, a)=>{ 
    return a.sort((x, y) => d === 'R' ? x - y : y - x);
}