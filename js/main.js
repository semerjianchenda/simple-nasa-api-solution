//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getUserDate)

function getUserDate() {

    const userInput = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${userInput}`

    // console.log(userInput)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.title)
            console.log(data.url)
            console.log(data.explanation)

            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation

            if(data.media_type == 'image'){
                document.querySelector('img').src = data.url
            }else if(data.media_type == 'video'){
                document.querySelector('iframe').src = data.url
            }

            
})
.catch(err => {
    console.log(`error ${err}`)
});
}
