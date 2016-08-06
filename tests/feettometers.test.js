(function() {

  'use strict';

  var FeetToMeters = require('../feettometers.js');

  describe('feettometers.js', function() {

    it('is a thing', function() {
      expect(FeetToMeters).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of meters for number of feet given', function() {

        var ftm = new FeetToMeters();
        var input = 1;
        var output = 0.3048;

        expect(
          ftm.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

}());
