function feast(beast, dish) {
    //extract first character with charAt[]
     const firstChar = beast[0]
     const lastChar = beast[beast.length - 1]
     
     const dishFirst = dish[0]
     const dishLast = dish[dish.length - 1]
     
   // get last char with .length 
     //compare both 
     //return
     return firstChar === dishFirst && lastChar === dishLast
   }
   
   
   console.log(feast( 'dragon' ,'dragon fan')) // true 
   console.log(feast( 'clover' ,'car')) // true 
   console.log(feast( 'alien' ,'acos')) // false 
   
   