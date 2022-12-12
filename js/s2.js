const thumbImgCont2 = document.getElementById('thumbnail-section');
const thumbnails2 = document.getElementsByClassName('thumbnail');
const fullSizeImgs2 = document.getElementsByClassName('mySlides');
const caption2Cont2 = document.querySelector('.caption2-container');
const caption2 = document.getElementById('caption2');
/* Acts as an index to retrieve images from 'thumbnails2' and 'fullSizeImgs2'; 
used with < and > arrow icons */
let currentImage = 0; 


// Removes 'show' classes from large images
// Removes 'active' class from thumbnails2
function reset() {
  for (let img of fullSizeImgs2) {
    img.classList.remove('show');
  }
  for (let thumbs of thumbnails2) {
    thumbs.firstElementChild.classList.remove('active');
  }
}

// Show larger image based on thumbnail index clicked
thumbImgCont2.addEventListener('click', (e) => {
  reset();
  // Find index of thumbnail clicked
  const index = [...thumbnails2].indexOf(e.target.parentNode);
  // Use that index to show its corrolating larger IMG
  fullSizeImgs2[index].classList.add('show');
  // Set caption2 using img 'alt' tag
  caption2.textContent = e.target.getAttribute('alt');
  // Set global variable for currentImage
  currentImage = index;
  // Alter the thumbnail to show it's selected
  hiLiteThumbnail();
})

function hiLiteThumbnail() {
  let thumbnail = thumbnails2[currentImage].firstElementChild;
  thumbnail.classList.add('active');
}

// Get Arrow Advancers to work
function goBack(e) {
  reset();
  if (e.target.classList.contains("prev") && currentImage > 0) {
    currentImage -= 1;
    fullSizeImgs2[currentImage].classList.add('show');
    caption2.textContent = thumbnails2[currentImage].firstElementChild.getAttribute('alt');
    hiLiteThumbnail();
  } else if (e.target.classList.contains("prev") && currentImage === 0) {
    currentImage = thumbnails2.length-1;
    fullSizeImgs2[currentImage].classList.add('show');
    caption2.textContent = thumbnails2[currentImage].firstElementChild.getAttribute('alt');
    hiLiteThumbnail();
  }
}

function goFwd(e) {
  reset();
  if (e.target.classList.contains("next") && currentImage < thumbnails2.length-1) {
    currentImage += 1;
    fullSizeImgs2[currentImage].classList.add('show');
    caption2.textContent = thumbnails2[currentImage].firstElementChild.getAttribute('alt');
    hiLiteThumbnail(); 
  } else if (e.target.classList.contains("next") && currentImage === thumbnails2.length-1) {
    currentImage = 0;
    fullSizeImgs2[currentImage].classList.add('show');
    caption2.textContent = thumbnails2[currentImage].firstElementChild.getAttribute('alt');
    hiLiteThumbnail();  
  }
}

// Listen for back and forward arrow clicks
caption2Cont2.addEventListener('click', (e) => {
  // Allows only the Arrow icons to trigger event handlers
  if (e.target.nodeName !== 'A') return false;
  // Event Handlers
  e.target.classList.contains("next") ? goFwd(e) : goBack(e);  
});