// sample
var nums = [3, 7, 1, 6];

var minimizeArrayValue = function(nums) {
   let test = operate(nums);
   // console.log(test);
};

// special operation
function operate(nums) {
    // establish what the maximum currently is and where it is
    let maxIndex = findMax(nums);
    console.log(maxIndex);
    // let maxValue = nums[maxIndex];
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        new_nums.push(nums[i]);
        console.log("pushing... : " + nums[i]);
    }
    new_nums[maxIndex]--;
    new_nums[maxIndex - 1]++;
    
    // how do we know we can't go lower?
    // first, check if the index is the new maximum or if the maximum is now elsewhere
    let isThereMultipleMax;
    
}

// find maximum
function findMax(arr) {
    let max_value = Math.max(...arr);
    let max_index = arr.indexOf(max_value);
    return max_index;
}


minimizeArrayValue(nums);