angular.module('imageUploader.service',[])
.factory('imageService', function(){
  return {
    Test: function(){
      console.log('it works');
    },
    upload: function(url){
      return new Promise((resolve,reject)=>{
        let img = new Image();
        img.src = url;
        img.onload = () => {
          resolve();
        }
        img.onerror = () =>{
          reject();
        }
      })
    }
  }
})