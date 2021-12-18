const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const currentImage = document.querySelector('.currentImage');
const thumbBox = document.querySelector('.thumb-box');
const images = [];

let thumb_counter = 1;
function init(){//Activating first thumbnail by default
  for(let i=0;i < 5;i++){
    const imageThumb = document.createElement('img');
    imageThumb.setAttribute('src','images/img'+(i+1)+'.jpg');
    images.push(imageThumb);
    images.addEventListener('click', (e) => {
      showModal(e.target);
    })
    thumbBox.appendChild(imageThumb);
  
    imageThumb.onclick = function(e) {
      thumb_counter = Number(e.target.getAttribute('src')[10]);
      currentImage.setAttribute('src', e.target.getAttribute('src'));
    }
  }
  images[0].setAttribute('class', 'active');
}

function addFadeEffect(){
  if(currentImage.id === 'fade1'){
    currentImage.id= 'fade2';
  }
  else currentImage.id = 'fade1';
}

function showModal(image){
  const modalImage = document.querySelector('.content');
  const modalThumbnails = document.querySelector('.thumbnails');
  const modal = document.querySelector('.modal');
  const close = document.getElementById('close');
  modalImage.setAttribute('src', image.getAttribute('src'));
  modalImage.classList.replace('zoom-out','zoom-in');

  close.addEventListener('click', () => {
    modalImage.classList.replace('zoom-in','zoom-out');
    setTimeout(() => {
      modal.style.display ='none';
    }, 400);
  })
  modal.style.display = 'block';
}

observer = new MutationObserver((changes) => { //Observer, updates thumbnails, whenever 'src' of currentImage is changed
  changes.forEach(change => {
      if(change.attributeName.includes('src')){
        images.forEach(image =>image.removeAttribute('class'))
        images[thumb_counter-1].setAttribute('class', 'active');
        addFadeEffect();
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

currentImage.addEventListener('click', (event) => {
  showModal(event.target);
});

init();
observer.observe(currentImage, {attributes : true});
