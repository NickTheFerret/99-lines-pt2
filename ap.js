


for (let i = 0; i < 100; i++) {

    //nested for loop   
    for (let u = 99; u > 0; u--) {
        if (u == 2) {
            console.log(`${u} lines of code in the file, ${u} lines of code. ${friends[i]} takes one out,
        debugs it out. ${u - 1} line of code in the file!`)
        }

        else if (u == 1) {
            console.log(`${u} line of code in the file, ${u} line of code. ${friends[i]} takes one out,
            debugs it out. ${u - 1} lines of code in the file!`)
        }

        else {
            console.log(`${u} lines of code in the file, ${u} lines of code. ${friends[i]} takes one out,
    debugs it out. ${u - 1} lines of code in the file!`)
        }
    }
}