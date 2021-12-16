const thumbBox = document.querySelector('.thumb-box');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const currentImage = document.querySelector('.currentImage');
let thumb_counter = 1;

//Creating thumbnails
for(let i=0;i < 5;i++){
  const imageThumb = document.createElement('img');
  imageThumb.setAttribute('src','images/img'+(i+1)+'.jpg');
  imageThumb.setAttribute('class','thumb');
  thumbBox.appendChild(imageThumb);
  imageThumb.onclick = function(e) {
      thumb_counter = Number(e.target.src[32]);
      currentImage.src = e.target.src;
    }
}

nextBtn.onclick = function(){
  console.log("Nextbtn: Previous: " + thumb_counter);
  (thumb_counter == 5)? thumb_counter = 1 : thumb_counter += 1;
  currentImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
  console.log("Nextbtn: Next: " + thumb_counter);
}

prevBtn.onclick = function() {
  console.log("prevBtn: Previous: " + thumb_counter);
  (thumb_counter == 1)? thumb_counter = 5 : thumb_counter -= 1;
  currentImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
  console.log("prevBtn: Next: " + thumb_counter);
}