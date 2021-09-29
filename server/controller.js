const upliftingMessages = input

const upliftingMessages = [
    "You are amazing",
    "You are loved"
];

module.exports = { 
    createMessage: (req, res) => {
    const { input } = req.params
        res.status(200).send(response)
    }
}



//Notes from stuart's zoom
// module.exports = {
//     getFortune: (req, res) => {
//         const randIndex = Math.floor(Math.random() * fortunes.length)
//         let fortune = fortunes[randIndex]
//         res.status(200).send(fortune)
//     },
//     addFortune: (req, res) => {
//         console.log('is this not working')
//         console.log(req.body)
//         const { value } = req.body
//         fortunes.push(value)

//         res.status(200).send(fortunes)
//     },
//     getFavColor: (req, res) => {
//         res.status(200).send(favColor);
//     },
//     changeColor: (req, res) => {
//         const { color } = req.body
//         favColor = color
//         res.status(200).send(favColor)
//     }
// }


// const fortuneBtn = document.getElementById('fortuneBtn')
// const fortuneDisplayContainer = document.getElementById('fortuneDisplay')

// console.dir(fortuneDisplayContainer)

// fortuneBtn.addEventListener('click', () => {
//     axios.get('http://localhost:4000/api/fortune')
//         .then(res => {
//             fortuneDisplayContainer.innerHTML = ''
//             const fortuneElement = document.createElement('li')
//             // console.dir(fortuneElement)
//             // fortuneElement.innerHTML = '<div><h2>TITLE</h2><p>THIs is a p</p></div>'
//             fortuneElement.textContent = res.data
//             fortuneDisplayContainer.append(fortuneElement)
//             console.log(res.data)
//         })
//         .catch(err => console.log(err))
// })