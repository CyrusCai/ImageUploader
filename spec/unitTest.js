describe('ControllerTest', function() {
  beforeEach(module('imageUploader'));
  var $controller = undefined;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('uploadImages()', function() {
    it('If the url of image is right, counter total should equal to 1', function() {
      var $scope = {};
      image = {"Gallery":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4"};
      var controller = $controller('loadController', { $scope: $scope });
      expect($scope.total).toEqual(0);
      $scope.upload(image);
      expect($scope.total).toEqual(1);
      // $scope.upload(image);
    });
    it('If the url of image is wrong, counter total should equal to 1', function() {
      var $scope = {};
      image = {"Gallery":"https://www.nasa.gov/sites/default//image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4"};
      var controller = $controller('loadController', { $scope: $scope });
      expect($scope.total).toEqual(0);
      $scope.upload(image);
      expect($scope.total).toEqual(1);
      // $scope.upload(image);
    });
    it('If the url of image is right, counter finish should equal to 1', function() {
      var $scope = {};
      image = {"Gallery":"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4"};
      var controller = $controller('loadController', { $scope: $scope });
      expect($scope.finish).toEqual(0);
      $scope.upload(image);
      expect($scope.finish).toEqual(1);
    });
    it('If the url of image is wrong, counter finish should remain 0', function() {
      var $scope = {};
      image = {"Gallery":"https://www.nasa.gov/sites/default//image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4"};
      var controller = $controller('loadController', { $scope: $scope });
      expect($scope.total).toEqual(0);
      $scope.upload(image);
      expect($scope.finish).toEqual(0);
    });
  });
});


// describe('Service test', function() {
//   beforeEach(module('imageUploader.service'));
//   var service, httpBackend;

//   // beforeEach(inject(function(_$service_){
//   //   // The injector unwraps the underscores (_) from around the parameter names when matching
//   //   $service = _$service_;
//   // }));

//   beforeEach(inject(function(testService, _$httpBackend_) {
//        service = testService;
//        httpBackend = _$httpBackend_;
//   }));

//   it ('should be loaded', function() {
//    expect(service).toBeDefined();
//   });

  // describe('uploadImages()', function() {
  //   it('If the url of image is right, we should get a promise with resolve', function() {
  //     var $scope = {};
  //     var service = $service('imageService', { $scope: $scope });

  //     // expect($scope.total).toEqual(0);
  //   });
  // });
// });
