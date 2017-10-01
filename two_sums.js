//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].


nums = [3, 2, 4]


function twoSums(nums, target){
  let indexes
  nums.forEach((n ,index) => {
    nums.forEach((n2, index2) => {
      if(n != n2){
        if(n + n2 == target){
          indexes = [index, index2]
        }
      }
    })
  })
  return indexes
}


console.log(twoSums(nums, 6))
