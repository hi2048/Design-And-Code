const isPrime = (n) => {
  if(n < 2){
      return false;
  }

  if(n === 2){
      return true;
  }

  for(let i = 2, len = Math.sqrt(n); i <= len; i++){
      if(n % i == 0){
          return false;
      }
  }

  return true;
}
