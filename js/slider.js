const images = [
 'images/boy.svg',
 'images/ring.svg',
 'images/water.svg'
];

let imgIndex = 0;

const img = document.getElementById('carousel-img');

setInterval( () =>{
 if(imgIndex === images.length){
  imgIndex = 0;
 }
 const imgLink = images[imgIndex];
 img.setAttribute('src', imgLink);
 imgIndex++;
} ,1000)