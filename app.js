// task 1

/*function signature/sample */
// function cashOut( money ) {


//     if(typeof money !== 'number' || money < 0){
//         return "Invalid"
//     }

//     let sum =  money * 1.75 / 100;
//     return sum;
// }

// console.log(cashOut(2000));


// task 2
/*function signature/sample */
function  validEmail( email ) {

        if(typeof email !== "string"){
            return "Invalid"
        }
        let chack = ".-_+@";
        if(chack.includes(email[0]) || email.includes(" ") || !email.endsWith(".com") || !email.includes('@')){
            return false;
        }
        
        return true;
}
console.log(validEmail("he ro@alom.com"))


// task 3
/*function signature/sample */
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

// console.log(electionResult("mango , banana"))


// task 4
/*function signature/sample */
// function  isBestFriend( f1 , f2 ) {

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

// const friend = isBestFriend(
//     { name: "hashem", roll: 1 , bestFriend: 1},
// { name: "kashem" , roll: 1, bestFriend: 1 }

// );

// console.log(friend);