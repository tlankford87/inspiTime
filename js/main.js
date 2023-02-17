//fetch quote and author

function getFetch(){
      
      url = `https://api.goprogram.ai/inspiration`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          const quoteParagraph = document.getElementById('quoteParagraph')
          quoteParagraph.textContent = `"${data.quote}"`
          const quoteAuthor = document.getElementById('quoteAuthor')
          quoteAuthor.textContent = `-${data.author}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

getFetch()

//get date and time

class CurrentDateTime {
    constructor(){
        this.date = new Date()
        this.day = this.date.getDate()
        this.month = this.date.getMonth()+1
        this.year = this.date.getFullYear()
        this.hour = this.date.getHours()
        this.minutes = this.date.getMinutes()
    }

    getCurrentDate(){
        return `${this.month}-${this.day}-${this.year}`
    }

    getLocalTime(){
        let hours = this.hour
        let minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes
        hours = (hours % 12 || 12)
        return `${hours}:${minutes}`
    }

    displayLocalTime(){
        const localTime = document.getElementById('localTime')
        localTime.textContent = this.getLocalTime()
        const amOrPm = document.getElementById('amOrPm')
        if(this.hour < 12){
            amOrPm.textContent = 'AM'
        }else{
            amOrPm.textContent = 'PM'
        }
        console.log(this.minutes)
    }
    }


const currentDateTime = new CurrentDateTime()

currentDateTime.displayLocalTime()

//get current hour and set morning/afternoon/evening/night

function morningOrNight(){
    const morningOrNight = document.getElementById('morningOrNight')
    const body = document.getElementById('body')
    let now = new Date().getHours()
    if(now > 5 && now <= 12){
        morningOrNight.textContent = "Good Morning. It's Currently:"
        body.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 0 100%), url(../img/morningBG.jpg)'
        body.style.backgroundSize = 'cover'
    }else if(now > 12 && now <= 18){
        morningOrNight.textContent = "Good Afternoon. It's Currently:"
        body.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 0 100%), url(../img/daytimeBG.jpg)'
        body.style.backgroundSize = 'cover'
    }else if(now > 18 && now <= 22){
        morningOrNight.textContent = "Good Evening. It's Currently:"
        body.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 0 100%), url(../img/eveningBG.jpg)'
        body.style.backgroundSize = 'cover'
    }else if(now > 22 || now >= 0 && now <= 5){
        morningOrNight.textContent = "Good Night. It's Currently:"
        body.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 0 100%), url(../img/nighttimeBG.jpg)'
        body.style.backgroundSize = 'cover'
    }
}

morningOrNight()

//more info button

document.getElementById('button').addEventListener('click', moreInfo)

function moreInfo(){
    const moreInfo = document.getElementById('moreInfo')
    moreInfo.style.transform = 'translateY(125%)'
}

document.getElementById('close').addEventListener('click', closeMoreInfo)

function closeMoreInfo(){
    const moreInfo = document.getElementById('moreInfo')
    moreInfo.style.transform = 'translateY(200%)'
}