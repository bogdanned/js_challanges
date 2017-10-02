//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].


//Status: Accepted

nums = [3, 3]

//Aproach One: Brute Force
//Time Complexity: x
//Space Complexity: x1
function twoSums(nums, target){
  let indexes = null

  for(i=0; i < nums.length; i++){
    for(t=i+1; t < nums.length; t++){
      if(!indexes && nums[i] + nums[t] == target){
        indexes = [i, t]
      }
    }
  }

  return indexes
}


// Conclusion: for loops are faster then the array for each

console.log(twoSums(nums, 6))
