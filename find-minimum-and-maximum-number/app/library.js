module.exports = {
 
  findMinMax: function (arr) {
  	var minMaxArray = [];
  	if (arr.length === 0) {
  		return [];
  	}

  	var maxNumber = Number.MIN_VALUE;
	var minNumber = Number.MAX_VALUE;
	for (var i=0; i<arr.length; i++) {
		if (arr[i] > maxNumber) {
			maxNumber = arr[i];
		}
		if (arr[i] < minNumber) {
			minNumber = arr[i];
		}
	}
	if (maxNumber === minNumber) {
		minMaxArray.push(minNumber);
		return minMaxArray;
	}

 	minMaxArray.push(minNumber);
 	minMaxArray.push(maxNumber);
	return minMaxArray;
  }
}