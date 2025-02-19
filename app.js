
// function cashOut( money ) {

//     if(typeof money !== 'number' || money < 0){
//         return "Invalid"
//     }

//     let sum =  money * 1.75 / 100;
//     return sum;
// }

// console.log(cashOut(50000));


// task 2
// function  validEmail( email ) {

//         if(typeof email !== "string"){
//             return "Invalid"
//         }
//         let check = ".-_+@";
//         if(check.includes(email[0]) || email.includes(" ") || 
//             !email.endsWith(".com") || !email.includes('@')){
//             return false;
//         }
        
//         return true;
// }
// console.log(validEmail("king@yahoo.com"))



// function  electionResult(votes) {
//     if(!Array.isArray(votes)){
//         return "Invalid";
//     }

//     let mangovote = 0;
//     let bananavote = 0;
//     for(let vote of votes){
//        if(vote === 'mango'){
//         mangovote++;
//        }
//        else if(vote === 'banana'){
//         bananavote++;
//        }
//     }
//     if(mangovote > bananavote){
//         return 'Mango';
//     }
//     else if(bananavote > mangovote){
//         return 'Banana';
//     }
//     else{
//         return 'Draw';
//     }
    
    
// }

// console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]))



// function  isBestFriend( f1, f2 ) {

//     if(typeof f1 !=='object' || typeof f2 !== 'object'){
//         return "Invalid";
//     };

//     if(f1.bestFriend === f2.roll && f2.bestFriend === f1.roll){
//         return true;

//     }
//     else{
//         return false;
//     }
// }

// console.log(isBestFriend(
//     { name: "hashem", roll: 1 , bestFriend: 1},
// { name: "kashem" , roll: 1, bestFriend: 1 }
// ));



// function  calculateWatchTime( times ) {
//     if(!Array.isArray(times)){
//         return "Invalid"
//     }
//     let timeCount = 0;
//     for(let i = 0; i < times.length; i++){
//         if(typeof times[i] !== 'number'){
//             return "Invalid";
//         };
//         timeCount +=(times[i])
//     }
//     let sum = timeCount;
//     let hours = Math.floor(sum / 3600);
//     let minutes = Math.floor((sum % 3600) / 60);
//     let seconds = sum % 60;
//     return {hours, minutes, seconds};
// }

// console.log(calculateWatchTime([5600]));

