var videoStitching = function(clips, T) {
    clips.sort((a,b)=>a[0]-b[0]);
    var res = 0;
    var curr = [0,0];                
    var temp = [0,0]; 
    for(i=0;i<clips.length;i++){ 
        if(clips[i][0]>curr[1]){
             res++;
             curr = [temp[0],temp[1]];  
        }
        if(clips[i][0]<=curr[1]&&clips[i][1]>temp[1]){
             temp = [clips[i][0], clips[i][1]];
             if(clips[i][1]>=T) return res+1;
        }}
    return  T === 0 ? 0 : -1;
};


// Example 1:

// Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10
// Output: 3
// Explanation: We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
// Then, we can reconstruct the sporting event as follows:
// We cut [1,9] into segments [1,2] + [2,8] + [8,9].
// Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].
// Example 2:

// Input: clips = [[0,1],[1,2]], time = 5
// Output: -1
// Explanation: We cannot cover [0,5] with only [0,1] and [1,2].
// Example 3:

// Input: clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], time = 9
// Output: 3
// Explanation: We can take clips [0,4], [4,7], and [6,9].
 