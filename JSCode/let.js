//Global variable index has been declared and initialized
//Edit the code below.
index=0;
N=10;
console.log("The global index (before for-loop) is : ", index);

for(let index = 0; index < N; index++){
    console.log("The local index is : ",index);
}

console.log("The global index (after for-loop) is : ",index);
