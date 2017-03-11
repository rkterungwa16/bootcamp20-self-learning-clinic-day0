
function aritGeo(arr) {
   if (arr.length === 0) {
      return 0;
   }
   for (i=0; i < arr.length; i++) {
      if ( arr[i+1] - arr[i] === arr[i+2] - arr[i+1] && arr[i+3] - arr[i+2] === arr[i+2] - arr[i+1]){
         return 'Arithmetic';
      }
      else if ( arr[i+1]/arr[i] === arr[i+2]/arr[i+1]) {
         return 'Geometric';
      }

      else {
         return -1;
      }

   }

}
