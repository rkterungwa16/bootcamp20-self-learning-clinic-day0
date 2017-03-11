(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [1,2] for [1,1,1,2]', function () {
        expect(findMinMax([1,1,1,2])).toEqual([1,2])
      });

      it('should return [10,1] for [10,10,1,1]', function () {
        expect(findMinMax([10,10,1,1])).toEqual([1,10]);
      });

      it('should return [10001, 10003] for [10001,10002,10003]', function () {
        expect(findMinMax([10001,10002,10003])).toEqual([10001,10003]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [10] for [10,10,10]', function () {
        expect(findMinMax([10,10,10])).toEqual([10]);
      });  

      it('should return [100] for [100,100,100]', function () {
        expect(findMinMax([100,100,100])).toEqual([100]);
      });

      it('should return [1000] for [1000,1000,1000,1000]', function () {
        expect(findMinMax([1000,1000,1000,1000])).toEqual([1000]);
      })

    });

  });

})();