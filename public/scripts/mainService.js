angular.module('imageUploader.service',[])
.factory('imageService', function($q){
  return {
    //es6 Promise
    // upload: function(url){
    //  defer = $q.defer();
    //   return new Promise((resolve,reject)=>{
    //     let img = new Image();
    //     img.src = url;
    //     img.onload = () => {
    //       resolve(url);
    //     }
    //     img.onerror = () =>{
    //       reject(url);
    //     }
    //   })
    // }

    //angular $q
    upload: function(url){
      let deferred = $q.defer();
      let img = new Image();
      img.src = url;
      img.onload = () => {
        deferred.resolve(url);
      }
      img.onerror = () =>{
        deferred.reject(url);
      }
      return deferred.promise;
    }
  }
})