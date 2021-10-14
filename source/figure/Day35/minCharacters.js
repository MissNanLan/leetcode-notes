/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
//  class Solution {
//     public int minCharacters(String a, String b) {
//         int m = a.length(), n = b.length();
//         int[] aa = new int[26];
//         int[] bb = new int[26];

//         for (int i = 0; i < m; i++) aa[a.charAt(i) - 'a']++;
//         for (int j = 0; j < n; j++) bb[b.charAt(j) - 'a']++;

//         int ans = m + n;
//         int asum = 0, bsum = 0;
//         for (int i = 0; i < 25; i++) {
//             asum += aa[i];
//             bsum += bb[i];
//             ans = Math.min(Math.min(ans, m + n - aa[i] - bb[i]), Math.min(m - asum + bsum, n - bsum + asum));
//         }

//         return Math.min(ans, m + n - aa[25] - bb[25]);
//     }
// }


 var minCharacters = function(a, b) {
     const m = a.length, n = b.length

     let aa = new Array(26).fill(0)
     let bb = new Array(26).fill(0)

     for (let i = 0; i < m; i++) aa[a.charCodeAt(i) - 97]++;
     for (let j = 0; j < n; j++) bb[b.charCodeAt(j) - 97]++;
     
     let ans = m+n;
     let asum =0,bsum=0;

     for(let i=0;i<25;i++){
        asum += aa[i];
        bsum += bb[i];
        ans = Math.min(Math.min(ans, m + n - aa[i] - bb[i]), Math.min(m - asum + bsum, n - bsum + asum));

     }
     return Math.min(ans, m + n - aa[25] - bb[25]);
};

