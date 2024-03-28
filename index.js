
function superbowlWin(record){
    const win = record.find(match => match.result === 'W');
    return win? win.year : undefined
}
