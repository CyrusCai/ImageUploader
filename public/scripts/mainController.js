"use strict";

angular.
module('imageUploader',['imageUploader.service'])
.controller('loadController', function($scope,imageService){
  $scope.imagelist = {
    "Gallery":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4",
    "Gallery2":"https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg",
    "Star Clusters":"http://cdn.spacetelescope.org/archives/images/large/heic1509a.jpg",
    "King Fisher":"http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
    // "King Fisher False":"http://www.gettyimages.ca/gi-resources/images/Homepage/CMS_Creative_164657191_Kingfisher.jpg"
  };
  initData();
  // let vm = this;
  function initData(){
    $scope.total = 0;
    $scope.finish = 0;
    $scope.percent = 0;
    $scope.success = [];
    $scope.fail = [];
  }
  $scope.upload = function(list){
    return uploadImages(list);
  }

  // $scope.upload = uploadImages($scope.imagelist);
  function successCallback(url){
    $scope.finish++;
    $scope.percent = ($scope.finish/$scope.total)*100+'%';
    $scope.success.push('Finish uploading: '+url);
  }

  function failCallback(url){
    console.log('load fail',url);
    $scope.fail.push('Fail to upload: '+url);
  }

  function uploadImages(images){
    initData();
    // return function(){
      Object.getOwnPropertyNames(images)
      .forEach((key)=>{
        $scope.total++;
        imageService.upload(images[key]).then(successCallback,failCallback);
      })
    // }
  }
})




// EventLitener
// $.on
// angular observe