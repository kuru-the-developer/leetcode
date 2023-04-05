/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// sample
var nums1 = [1, 4, 2, 3, 7, 9];
var nums2 = [10];
var findMedianSortedArrays = function(nums1, nums2) {
    /*  Thought Process #1  *******************************************************************************************************
     *   1) merge the two arrays together                                                                                         *
     *   2) sort them                                                                                                             * 
     *   3) count to middle, use length of merged array to determine whether there is a 'clean' middle number or average of two   *
     *   4) output result                                                                                                         *
     *****************************************************************************************************************************/

    // 1
    var nums3 = nums1.concat(nums2);
    // console.log(nums3);

    //2
    nums3.sort(function(a, b) {
        return a - b;
    });
    // console.log(nums3);

    //3 
    // if the length is odd, then there is a clean middle and we can find that
    var median;
    if(nums3.length % 2 != 0) {
        var idx = (nums3.length - 1) / 2;
        median = nums3[idx];
    } else {
        var higherIdx = nums3.length / 2;
        var lowerIdx = higherIdx - 1;
        median = (nums3[higherIdx] + nums3[lowerIdx]) / 2;
    }

    // 4
    return median;
};

findMedianSortedArrays(nums1, nums2);