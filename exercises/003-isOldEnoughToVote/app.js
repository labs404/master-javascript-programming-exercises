function isOldEnoughToVote(age) {
  // your code here
  if (age > 17) {
    return true;
  } else {
    return false;
  }
}

console.log(isOldEnoughToVote(20))