/*
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to
check if they are one edit (or zero edits) away.
*/

function oneAway(str1, str2) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (map1.has(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1);
    } else {
      map1.set(str1[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (map2.has(str2[i])) {
      map2.set(str2[i], map2.get(str2[i]) + 1);
    } else {
      map2.set(str2[i], 1);
    }
  }

  let checkMap;
  let toCheckMap;
  if (map1.keys().length > map2.keys().length) {
    checkMap = map1;
    toCheckMap = map2;
    checkStr = str2;
  } else {
    checkMap = map2;
    toCheckMap = map1;
    checkStr = str1;
  }

  let change = false;
  for (const key of checkMap.keys()) {
    if (toCheckMap.has(key)) {
      if (Math.abs(checkMap.get(key) - toCheckMap.get(key)) >= 1 && change) return false;
      if (Math.abs(checkMap.get(key) - toCheckMap.get(key)) == 1) change = true;
    } else {
      if (change) return false;
      if (checkMap.get(key) > 1) return false;
      change = true;
    }
  }
  return true;
}

//Time comp: O(n + m) - n and m being the length of both strings
//Space comp: O(n + m) - n and m being the length of both strings

/*
- to know if a string is just a change away from other,
  we have to store the amount of letters each string has
  in two maps, then compare each key of the map and if a key
  with more than one occurence is missing or if the value of a
  key is different by more than one, then it is not a change away
*/

/*
  - map each string into a map, using the letters as keys and
  the number of appearances in the string as the value
  - iterate over the keys of the first map and check whether 
  the key exists on the other map and if said key differs by
  more than one unit
*/