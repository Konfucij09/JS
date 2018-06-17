function getFreeLand(arr1, arr2){
  arr1[1] = arr1[1].split(':');

  if (arr1[0] === undefined || arr1[0] <= 0 || arr1[1] === undefined)
    throw new Error ('Area of garden is not find');
  if (arr2[0] <= 0 || arr2[1] <= 0) 
    throw new Error ('Area of sector is not find');
  let area = arr1[0]*100;
  let areaLenght = Math.sqrt(area/(arr1[1] * arr1[2])) * arr1[1];
  let areaWidth = Math.sqrt(area/(arr1[1] * arr1[2])) * arr1[1] * arr1[2];
  if ((areaLenght < arr2[0] || areaWidth < arr2[1]) && areaLenght < arr2[1] || areaWidth < arr2[0])
    throw new Error ('Size of sector is uncorrect');
  let result = area % (arr2[0]* arr2[1])
  return(result);
}
getFreeLand([100, '1:1'],[15, 25]);