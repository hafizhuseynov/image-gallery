const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const currentImage = document.querySelector('.display img');
const thumbBox = document.querySelector('.thumb-box');
const images = [];

let thumb_counter = 1;
//Creating thumbnails

function init(){//Activating first thumbnail by default
  for(let i=0;i < 5;i++){
    const imageThumb = document.createElement('img');
    imageThumb.setAttribute('src','images/img'+(i+1)+'.jpg');
    images.push(imageThumb);
    thumbBox.appendChild(imageThumb);
  
    imageThumb.onclick = function(e) {
      thumb_counter = Number(e.target.getAttribute('src')[10]);
      currentImage.setAttribute('src', e.target.getAttribute('src')) ; 
    }
  }
  images[0].setAttribute('class', 'active');
}

observer = new MutationObserver((changes) => { //Observer, updates thumbnails, whenever 'src' of currentImage is changed
  changes.forEach(change => {
      if(change.attributeName.includes('src')){
        for(let i=images.length-1;i >= 0; i--){
          images[i].removeAttribute('class');
        }
        images[thumb_counter-1].setAttribute('class', 'active');
      }
  });
});

prevBtn.onclick = function() {  //Changes 'src' of current image to previous
  (thumb_counter == 1)? thumb_counter = 5 : thumb_counter -= 1;
  currentImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
}

nextBtn.onclick = function(){   //Changes 'src' of current image to next
  (thumb_counter == 5)? thumb_counter = 1 : thumb_counter += 1;
  currentImage.setAttribute('src','images/img'+thumb_counter+'.jpg');
}

init();
observer.observe(currentImage, {attributes : true});
