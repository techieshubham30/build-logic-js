// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

for(var row=1;row<=5;row++){
    for(var col=1;col<=row;col++){
        process.stdout.write("* ");    }
    console.log("\n");
}