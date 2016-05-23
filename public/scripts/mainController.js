"use strict";


angular.
module('imageUploader',['imageUploader.service'])
.controller('loadController', function($scope,imageService){
  $scope.imagelist = {
    "Gallery":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4",
    "Gallery2":"https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg",
    "Star Clusters":"http://cdn.spacetelescope.org/archives/images/large/heic1509a.jpg",
    "King Fisher":"http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  };
  initData();
  // let vm = this;
  function initData(){
    $scope.total = 0;
    $scope.finish = 0;
    $scope.percent = 0;
    $scope.result = '';
  }

  $scope.upload = uploadImages($scope.imagelist);
  // let callback = [
  function successCallback(img){
    console.log('img get',img);
    $scope.finish++;
    $scope.percent = ($scope.finish/$scope.total)*100+'%';
    $scope.$apply();
  }
  function failCallback(){
    console.log('upload fail');
  }
  // ],
  function uploadImages(images){
    initData();
    return function(){
      Object.getOwnPropertyNames(images)
      .forEach((key)=>{
        $scope.total++;
        imageService.upload(images[key]).then(successCallback,failCallback);
        console.log('img get',img);
        $scope.result +='Finish uploading '+key+" : "+images[key]+'//n';
        console.log('Finish uploading',key,":",images[key]);
      })
    }
  }
  // imageService.Test();

})


