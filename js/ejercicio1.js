const size = 50;
var arrayGrande = new Array(size);

function rellenarArrayF(array){

    return array.fill(0);
}

function rellenarArrayFo(array) {
  for (var i = 0; i < size; i++) {
    array[i] = 0;
  }

  return array;
}


console.log(rellenarArrayF(arrayGrande));
arrayGrande = [];
console.log(rellenarArrayFo(arrayGrande));
