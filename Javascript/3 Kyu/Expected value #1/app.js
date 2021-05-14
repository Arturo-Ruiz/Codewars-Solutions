// Hint: Initial code
const all = [expected]
while ((one = expected) != all[0])
    all.push(one)

let i = 0

// Main function
function next() {
    return all[i = (i + 1) % all.length]
}