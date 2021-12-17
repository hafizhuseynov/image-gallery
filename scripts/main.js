const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const currentImage = document.querySelector('.currentImage');
const thumbBox = document.querySelector('.thumb-box');
const images = [];


let thumb_counter = 1;
//Creating thumbnails
for(let i=0;i < 5;i++){
  const imageThumb = document.createElement('img');
  imageThumb.setAttribute('src','images/img'+(i+1)+'.jpg');
  images.push(imageThumb);
  thumbBox.appendChild(imageThumb);

  imageThumb.onclick = function(e) {
    thumb_counter = Number(e.target.getAttribute('src')[10]);
    currentImage.setAttribute('src', e.target.getAttribute('src')) ;
    updateThumb();
  }
}

updateThumb();

nextBtn.onclick = function(){
  (thumb_counter == 5)? thumb_counter = 1 : thumb_counter += 1;
  currentImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
  updateThumb();
  
}

prevBtn.onclick = function() {
  (thumb_counter == 1)? thumb_counter = 5 : thumb_counter -= 1;
  currentImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
  updateThumb();
}

function updateThumb(){
  for(let i=images.length-1;i >= 0; i--){
    images[i].removeAttribute('class');
  }
  images[thumb_counter-1].setAttribute('class', 'active');
}