function computeRanges(arr, op, ranges) {
    const n = arr.length;
    let level = arr, k = 1;
    const levels = [level];
    while (level.length > 1) {
        const next = [];
        for (let i = 0; i < level.length; i += 2) {
            next.push(i < level.length - 1 ? op(level[i], level[i + 1]) : level[i]);
        }
        levels.push(level = next);
        k *= 2;
    }

    function reduce(level, i, len, a, b) {
        if (level === 0) return levels[0][i];
        const l = i * len;
        const r = Math.min(l + len, n);
        if (a === l && b === r) return levels[level][i];
        const m = i * len + len / 2;
        if (a >= m) return reduce(level - 1, 2 * i + 1, len / 2, a, b);
        if (b <= m) return reduce(level - 1, 2 * i, len / 2, a, b);
        return op(reduce(level - 1, 2 * i, len / 2, a, m), reduce(level - 1, 2 * i + 1, len / 2, m, b));
    }

    return ranges.map(([a, b]) => reduce(levels.length - 1, 0, k, a, b));
}