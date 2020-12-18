console.time()
function makePathArray(num) {
  let pathArray = [];
  let row = [];
  for (let i = 0; i < num; i++) {
    row.push(0);
  }
  for (let i = 0; i < num; i++) {
    pathArray.push(row.slice());
  }
  let lastRow = pathArray[pathArray.length - 1];
  lastRow[lastRow.length - 1] = 1;

  return pathArray;
}


function checkIfFail(array, y, x) {
    if (array[y] === undefined) {
    return true;
  }
  if (array[y][x] === undefined) {
    return true;
  }
}


function moveInPathArray(array, strY = 0, strX = 0) {
  if(checkIfFail(array, strY, strX)) {
      return 0;
  }
  if (array[strY][strX] !== 0) {
      return array[strY][strX];
  }
  let xResult = moveInPathArray(array, strY + 1, strX);
  let yResult = moveInPathArray(array, strY, strX + 1);
  return xResult + yResult;
}

function calcPaths(num) {
  pathArray = makePathArray(num);
  for(let y = num - 1; y >= 0; y--) {
      for(let x = num - 1; x >= 0; x--) {
          pathArray[y][x] = moveInPathArray(pathArray, y, x);
          
      }
  }
//   console.log(pathArray);
  return pathArray[0][0];
}

console.log(calcPaths(21));

console.timeEnd();
