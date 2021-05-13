function chessKnight(cell) {
    let twos = ['a1', 'a8', 'h1', 'h8']
    let threes = ['a2', 'a7', 'h2', 'h7', 'b1', 'b8', 'g1', 'g8']
    let fours = ['b2', 'b7', 'g7', 'g2']
    if (twos.includes(cell)) return 2
    else if (threes.includes(cell)) return 3
    else if (fours.includes(cell) || cell[0] == 'a' || cell[0] == 'h' || cell[1] == '1' || cell[1] == '8') return 4
    else if (cell[0] == 'g' || cell[0] == 'b' || cell[1] == '2' || cell[1] == '7') return 6
    else return 8
}