let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function SeparaParImpar(nums){
    let numsPares = [];
    let numsImpares = [];
    let indicePar = 0
    let indiceImpar = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] %2 === 0){
            numsPares[indicePar] = nums[i] 
            indicePar++
        } else {
            numsImpares[indiceImpar] = nums[i] 
            indiceImpar++
        }
    }
    
    console.log(numsPares)
    console.log(numsImpares)
}
SeparaParImpar(nums)