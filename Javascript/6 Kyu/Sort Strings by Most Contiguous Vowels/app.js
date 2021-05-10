function sortStringsByVowels(ss) {
    const gl = s => (Math.max(...(s.match(/[aeiou]+/ig) || []).map(r => r.length)))
    return ss.sort((a, b) => gl(b) - gl(a));
}