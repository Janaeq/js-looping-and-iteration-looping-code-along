// Code your solutions in this file
function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(count) {
    // while the argument is greater than 0
    while (count > 0) { 
        // write the argument
        console.log(count);
        // subtract the argument by 1
        count -= 1
    }
    // invoke console.log, or write the console.log()
    console.log(count)
    // repeat until condition is no longer satisfied
}