exports.mark = function (req, res) {

  var xStart = '982';
  var xEnd   = '600';

  var yStart = '1595';
  var yEnd   = '1624';

  var Y = function(yCount) {

    request({
      url: 'https://pixelcanvas.io/api/pixel',
      strictSSL: true,
      method: 'POST',
      json: {"x":982,"y":-yCount,"color":10,"fingerprint":"3416a540c515412c4465879d1a8336a2","token":null}
      }, function(err, res) {

          var result = res.body;

          if(result.errors != undefined && result.errors.length > 0 && result.errors[0].msg == 'You must provide a token') {
            setTimeout(function () {
              Y(parseFloat(yCount));
            }, 480000);
            return;
          }

          console.log(yCount);
          console.log('----------------');
          console.log(result);
          console.log(res.body['waitSeconds']);

          setTimeout(function () {
            Y(parseFloat(yCount) + 1);
          }, (res.body['waitSeconds'] * 1000));

      });

  }

  Y(yStart);

};
