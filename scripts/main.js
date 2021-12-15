const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');
const btnTheme = document.querySelector('.dark');
const displayedImage = document.querySelector('.displayed-img');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
let thumb_counter = 1;

//Creating thumbnails
for(let i=0;i < 5;i++){
  const imageThumb = document.createElement('img');
  imageThumb.setAttribute('src','images/img'+(i+1)+'.jpg');
  imageThumb.setAttribute('class','thumb');
  thumbBar.appendChild(imageThumb);
  imageThumb.onclick = function(e) {
      thumb_counter = Number(e.target.src[32]);
      displayedImage.src = e.target.src;
    }
}

//Changing overlay of displayed Image slightly dark
btnTheme.onclick = function() {
    const btnClass = btnTheme.getAttribute('class');
    if(btnClass === 'dark') {
      btnTheme.setAttribute('class','light');
      btnTheme.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      btnTheme.style.backgroundColor = "White";
      btnTheme.style.color = "Black";
    } else {
      btnTheme.setAttribute('class','dark');
      btnTheme.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      btnTheme.style.backgroundColor = "#777";
      btnTheme.style.color = "White";
    }
}

nextBtn.onclick = function(){
  if(thumb_counter == 5) thumb_counter = 0;
  thumb_counter += 1;
  displayedImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
}


previousBtn.onclick = function() {
  if(thumb_counter == 1) thumb_counter = 5;
  thumb_counter -= 1;
  displayedImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
}