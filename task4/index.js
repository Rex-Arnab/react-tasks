
// Given Code
// if (province == 'ONTARIO') {
//    rate = ONTARIO_RATE;
//    amt = base * ONTARIO_RATE;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
// } else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
//    rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
//    amt = base * rate;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
//    if (province == 'QUEBEC') {
//        points = 2;
//    }
// } else {
//    rate = 1;
//    amt = base;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
// }



// My Refactored Code
if (province == 'ONTARIO') {
   amt = base * ONTARIO_RATE;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
   amt = (province == 'QUEBEC') ? QUEBEC_RATE * base : ALBERTA_RATE * base;
   if (province == 'QUEBEC') {
       points = 2;
   }
} else {
   amt = base;
}
calc = 2 * basis(amt) + extra(amt) * 1.05;