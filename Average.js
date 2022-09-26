var nums = [2, 10, 5, 6, 19, 3];
var totalSum = 0;
for(var i in nums) 
{
    totalSum += nums[i];
}
var numsCnt = nums.length;
var average = totalSum / numsCnt;

console.log('Average is: ' + average)
