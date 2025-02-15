/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let target = 9
let nums = [2, 7, 11, 15]

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const x = nums[i];
            const y = nums[j];

            if (x + y === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum(nums, target));