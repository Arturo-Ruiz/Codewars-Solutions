const keyMap = {
    1: '',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
    0: ''
}
const stringToNums = str => str
    .replace(/[^a-z]/gi, '')
    .split('')
    .map(ch => Object.entries(keyMap).find(e => e[1].includes(ch))[0])

const numsToWords = numArray => {
    const startsWith = numArray.slice(0, 4)
        .reduce((wordList, number, i) =>
            wordList.filter(word => !word[i] || keyMap[number].includes(word[i]))
            , Preloaded.WORDS)
    const latterFours = numArray.slice(3)
        .reduce((wordList, number, i) =>
            wordList.filter(word => keyMap[number].includes(word[i]))
            , Preloaded.WORDS)
    const latterThrees = numArray.slice(4)
        .reduce((wordList, number, i) =>
            wordList.filter(word => keyMap[number].includes(word[i]))
            , Preloaded.WORDS)
        .filter(word => word.length == 3)
    return [...startsWith].map(first =>
        (first.length == 3 ? latterFours : latterThrees)
            .map(second => "1-800-" + first + "-" + second)
    ).reduce((acc, el) => acc.concat(el), [])
}


var check1800 = function (str) {
    return numsToWords(stringToNums(str));
}
