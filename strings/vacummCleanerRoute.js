/*
This question is asked by Amazon. Given a string representing the
sequence of moves a robot vacuum makes, return whether or not it
will return to its original position. The string will only contain
L, R, U, and D characters, representing left, right, up, and down respectively.
*/

function vacuumCleaner(str) {
  let vertAccum = 0;
  let horAccum = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'U':
        vertAccum++;
        break;
      case 'D':
        vertAccum--;
        break;
      case 'R':
        horAccum++;
        break;
      default:
        horAccum--;
        break;
    }
  }
  return (vertAccum == 0 && horAccum == 0);
}

//Time comp: O(n) -- n being the length of the string
//Space comp: O(1)