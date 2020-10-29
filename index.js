// Code your solutions in this file

// const giftGivers = ['Lisa', 'Kaitlyn', 'Jan'];
// const holiday = ['surprise'];

function writeCards(x, y) {
    newArray = []
    for (let i = 0; i < x.length; i++) {
        newArray.push(`Thank you, ${x[i]}, for the wonderful ${y} gift!`);
    }

    return newArray;

};

writeCards(['Lisa', 'Kaitlyn', 'Jan'], 'surpise');