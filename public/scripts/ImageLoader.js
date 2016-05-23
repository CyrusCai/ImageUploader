import Loader from './Loader.js';

class ImageLoader extends Loader{
  constructor(){
    super();
    this._store = {};
  }

  load(images){
    return new Promise((resolve, reject)=>{
    let total = 0;
    let finish = 0;
    let loadFinish = () =>{return total === finish;}
    Object.getOwnPropertyNames(images)
    .forEach((key)=>{
      total++;
      let img = new Image();
      img.src = images[key];
      img.onload = () =>{
          this._store[key] = img;
          finish++;
          console.log('image:'+key+' load finish.');
          if(loadFinish()){
            return img;
            resolve();
          }
      }
      img.onerror = () =>{
        reject();
      }
    })
  })
  }
}

module.exports = ImageLoader;
let images = {
  "Gallery":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4",
  "Gallery2":"https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg",
  "Star Clusters":"http://cdn.spacetelescope.org/archives/images/large/heic1509a.jpg",
  "King Fisher":"http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
};

// let loader = new ImageLoader();
// loader.load(images).then(()=>{
//   console.log('load finish.');
// },()=>{
//   console.log('error');
// });

// loader.on('progress',(current,total)=>{
//   console.log(`${current} of ${total} completed`);
// })