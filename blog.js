let blogs = []

function addBlog(a) {

    a.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')
    let blogForm = document.getElementById('blog')


    if (title == '' || content == '' || image.value == '') {
      alert('All input field must be fill')
    } else {
      image = URL.createObjectURL(image.files[0])
      console.log(image)
      
      let blog = {
        title: title,
        content: content,
        image: image,
        postAt: new Date(),
        author: 'Yoga Andik'
      }    

      blogs.push(blog)
      blogForm.reset()
    }
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
              <div class="distance-time">
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

  return fullTime
}


function getDistanceTime(time) {
  
  let timePost = time
  let timeNow = new Date()

  let distance = timeNow - timePost
  
  let milisecond = 1000  
  let secondInHours = 3600 
  let hoursInDay = 23 

  let minutes = 60
  let seconds = 60

  let distanceYear = Math.floor(distance / (milisecond * secondInHours * hoursInDay * 365))
  let distanceMonth = Math.floor(distance / (milisecond * secondInHours * hoursInDay * 30))
  let distanceWeek = Math.floor(distance / (milisecond * secondInHours * hoursInDay * 6))
  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay)) // untuk mendapatkan hari
  let distanceHours = Math.floor(distance / (milisecond * minutes * seconds)) // untuk mendaptkan jam
  let distanceMinutes = Math.floor(distance / (milisecond * seconds)) // untuk mendapatkan menit
  let distanceSeconds = Math.floor(distance / milisecond) // untuk mendapatkan detik

  console.log(new Date());
    

  if (distanceYear >= 1) {
    return `${distanceYear} year ago`
  } else if (distanceMonth >= 1) {
    return `${distanceMonth} month ago`
  } else if (distanceWeek >= 1) {
    return `${distanceWeek} week ago` 
  } else if (distanceDay >= 1) {
    return `${distanceDay} day ago`
  } else if (distanceHours >= 1) {
    return `${distanceHours} hours ago`
  } else if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago`
  } else {
    return `${distanceSeconds} seconds ago`
  }
  
}

setInterval(() => {
  renderBlog()
}, 6000)