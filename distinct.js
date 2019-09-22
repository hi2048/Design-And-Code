/**
 * 数组去重
*/

const distinctFilter = (arr) => (arr.filter((item, index) => (arr.indexOf(item) === index)))

const distinctSet = (arr) => (Array.from(new Set(arr)));

const distinctHash = (arr) => {
  const hash = {};
  let disArr = [];

  for(let i of arr){
    if(!hash[i]){
      disArr.push(i);
      hash[i] = [i];
    }
  }

  return disArr;
}

const unique = distinctHash;
