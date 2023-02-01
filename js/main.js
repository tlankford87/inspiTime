//fetch quote and author

function getFetch(){
      
      url = `https://api.goprogram.ai/inspiration`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          const quoteParagraph = document.getElementById('quoteParagraph')
          quoteParagraph.textContent = data.quote
          const quoteAuthor = document.getElementById('quoteAuthor')
          quoteAuthor.textContent = `-${data.author}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

getFetch()

//get date and time

// let date = new Date()

// let day = date.getDate()
// let month = date.getMonth() + 1
// let year = date.getFullYear()

// let currentDate = `${month}-${day}-${year}`
// let localTime = new Date().toString().slice(16,21)
// console.log(localTime)

// console.log(date)

// const currentTime = document.getElementById('currentTime')

//   currentTime.textContent = localTime

class CurrentDateTime {
    constructor(){
        this.date = new Date()
        this.day = this.date.getDate()
        this.month = this.date.getMonth()+1
        this.year = this.date.getFullYear()
    }

    getCurrentDate(){
        return `${this.month}-${this.day}-${this.year}`
    }

    getLocalTime(){
        return this.date.toString().slice(16, 21)
    }

    displayLocalTime(){
        const localTime = document.getElementById('localTime')
        localTime.textContent = this.getLocalTime()
    }
}

const currentDateTime = new CurrentDateTime()

currentDateTime.displayLocalTime()

//get current hour and set morning/afternoon/evening/night

function morningOrNight(){
    const morningOrNight = document.getElementById('morningOrNight')
    let now = new Date().getHours()
    if(now > 5 && now <= 12){
        morningOrNight.textContent = "Good Morning. It's Currently:"
    }else if(now > 12 && now <= 18){
        morningOrNight.textContent = "Good Afternoon. It's Currently:"
    }else if(now > 18 && now <= 22){
        morningOrNight.textContent = "Good Evening. It's Currently:"
    }else if(now > 22 || now >= 0 && now <= 5){
        morningOrNight.textContent = "Good Night. It's Currently:"
    }
}

morningOrNight()