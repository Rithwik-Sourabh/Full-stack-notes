// Reduce metod returns a single value

// Sum of all numbers or product of all numbers

let cartPrices = [1, 2, 3, 4, 5];

function sumAll(nums) {
  let sum = 0; // accumulator

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]; // logic
    // 0 = 0+1 = 1
    // 1 = 1+2 = 3
    // 3 = 3+3 = 6
    // 6 = 6+4 = 10
    // 10 = 10+5 = 15
    // 15
  }
  return sum;
}

let finalAmount = sumAll(cartPrices);
console.log(finalAmount);



let finalSum = cartPrices.reduce(function(acc , value){
    return  acc = acc+value
            // 0 = 0+1 = 1
            // 1 = 1+2 = 3
            // 3 = 3+3 = 6
            // 6 = 6+4 = 10
            // 10 =10+5 = 15
            // 15
            
}, 0)//here the accumulator should be initialised after the
    //internal or the call back funtion is completed in this case it is "0"
    //in the reduce function we have to give to parameters that is accumulator and the value


console.log(finalSum)