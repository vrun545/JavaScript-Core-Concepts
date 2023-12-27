s = "2213333asfasssffffasss"
let freqDict = {}
    // storing frequency of each letter in string as Key-Value pair
    for (i in s){
        if (s[i] in freqDict){
            freqDict[s[i]] += 1
        }
        else {
            freqDict[s[i]] = 1
        }
    }

    // getting arrays of [key,value] pairs
    const a = Object.entries(freqDict)     
    console.log(a)                  // [ [ '1', 1 ],[ '2', 2 ],[ '3', 4 ],[ 'a', 3 ],[ 's', 7 ],[ 'f', 5 ]]

    //sorting [key, value] based on key
    const sortOnKeys = Object.entries(freqDict).sort((a, b) => b[0] - a[0]);   
    console.log(sortOnKeys)         // [ [ '3', 4 ],[ '2', 2 ],[ '1', 1 ],[ 'a', 3 ],[ 's', 7 ],[ 'f', 5 ]]

    //sorting [key, value] based on value
    const sortOnValues= Object.entries(freqDict).sort((a, b) => b[1] - a[1]);   
    console.log(sortOnValues)       // [ [ 's', 7 ],[ 'f', 5 ],[ '3', 4 ],[ 'a', 3 ],[ '2', 2 ],[ '1', 1 ]]

    //converting array to Object
    const obj = Object.fromEntries(sortOnKeys);    
    console.log(obj)    //