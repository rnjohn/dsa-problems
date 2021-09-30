function urlify(str, realLength) {
  const len = str.length;
  const split = str.split(' ');
  let join = '';
  console.log(split)
  for (let i = 0; i < split.length; i++) {
    if (split[i] != '') {
      join += join.length == 0 ? split[i] : '%20'+split[i]
    }
  }
  console.log(join)
  if (join.length > len) return false;
  return join;
}

// Time comp: O(n) - n being the length of the string
// Space comp: O(n) - n being the length of the string


/*
- get the length of the input string
- split the input string into an array
- between the spaces, concat a %20
- remove trailing spaces
- join array
- check if length is the same
*/