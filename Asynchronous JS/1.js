names = ["Mary","John","Emma"]
heights = [180,165,170]
let heightIndex = [], l1=[]
for (let i=0; i<names.length; i++){
    heightIndex.push([heights[i], i]);
} 
heightIndex.sort((a, b) => b[0]-a[0])
console.log(heightIndex)    // ["Mary","Emma","John"]
for(let i=0; i<names.length; i++){
    l1.push(names[heightIndex[i][1]])
}
console.log(l1) 

