// Array of Object 
// let AllData = [
//     {
//         name: 'Samsung',
//         color: 'Red',
//         year: 2021
//     },
//     {
//         name: 'Xiaomi',
//         color: 'Blue',
//         year: 2021
//     },
//     {
//         name: 'Oppo',
//         color: 'Red',
//         year: 2021
//     }
// ]
let blogs = []

function addBlog(a) {

    a.preventDefault()

    console.log("Selamat Datang")

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0])

    let blog = {
        title: title,
        content: content,
        image: image,
        // postAt: getFullTime(new Date()),
        postAt: new Date(),
        author: 'Yoga Andik'
    }       

    blogs.push(blog)
    
    console.log(blogs)

    // for (let i = 0; i < blogs.length; i++) {
    //     console.log(blogs[i])       
    // }

    renderBlog()

}

function renderBlog() {

    let contentContainer = document.getElementById('contents')

    contentContainer.innerHTML = ''

    for (let i = 0; i < blogs.length; i++) {
      contentContainer.innerHTML += `
      <div class="blog-list-item">
            <div class="blog-image">
              <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" target="_blank"
                  >${blogs[i].title}</a
                >
              </h1>
              <div class="detail-blog-content">
                ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
              </div>
              <p>
                ${blogs[i].content}
              </p>
              <div style="text-align: right;">
                <span style="font-size: 13px; color: grey;">${getDistanceTime(blogs[i].postAt)}</span>
              </div>
            </div>
          </div>
      `
    }
}

let month = ['January', 
            'February', 
            'March', 
            'April', 
            'June', 
            'July', 
            'August', 
            'September',
            'October',
            'November',
            'December']

function getFullTime(time) {

  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

  // console.log(new Date())

  return fullTime
}


function getDistanceTime(time) {
  
  let timePost = time
  let timeNow = new Date()

  let distance = timeNow - timePost
  
  let milisecond = 1000  // seribu dalam 1 detik
  let secondInHours = 3600 // 1 jam sama dengan 3600 detik
  let hoursInDay = 23 // 23 jam dalam 1 hari

  let minutes = 60
  let seconds = 60

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay)) // untuk mendapatkan hari
  let distanceHours = Math.floor(distance / (milisecond * minutes * seconds)) // untuk mendaptkan jam
  let distanceMinutes = Math.floor(distance / (milisecond * seconds)) // untuk mendapatkan menit
  let distanceSeconds = Math.floor(distance / milisecond) // untuk mendapatkan detik


  if (distanceDay >= 1) {
    return `${distanceDay} day ago`
  } else if (distanceHours >= 1) {
    return `${distanceHours} hours ago`
  } else if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago`
  } else {
    return `${distanceSeconds} seconds ago`
  }
    
}

// Wed Jan 05 2022 23:19:14 GMT+0700 (Western Indonesia Time)
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 *  60 * 60 * 1000));
var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
console.log(`The week number of the current date (${currentdate}) is ${result}.`);  
console.log("currentdate.getDay() ",currentdate.getDay())
console.log("numberOfDays ",numberOfDays)
console.log("currentdate.getDay() + 1 + numberOfDays ",(currentdate.getDay() + 1 + numberOfDays) / 7);

setInterval(() => {
  renderBlog()
}, 1000)