let button = document.getElementById("button")

button.addEventListener("click", sing)




function sing() {
    let friends = ['Nick', 'Garrett', 'Nathan', 'Joseph', 'Brayden'];

    for (let i = 0; i < friends.length; i++) {
        const nick = document.createElement("div")
        nick.className = "friend"
        document.body.appendChild(nick)

        const tect = document.createElement("h3")
        tect.textContent = friends[i]
        nick.appendChild(tect)

        for (let u = 99; u > 0; u--) {
            const paragraph = document.createElement("p")
nick.appendChild(paragraph)

            if (u == 2) {
                paragraph.textContent = (`${u} lines of code in the file, ${u} lines of code. ${friends[i]} takes one out,
        debugs it out. ${u - 1} line of code in the file!`)
            }
            else if (u == 1) {
                paragraph.textContent = (`${u} line of code in the file, ${u} line of code. ${friends[i]} takes one out,
            debugs it out. ${u - 1} lines of code in the file!`)
            }
            else {
                paragraph.textContent = (`${u} lines of code in the file, ${u} lines of code. ${friends[i]} takes one out,
    debugs it out. ${u - 1} lines of code in the file!`)
            }
        }
    }
}