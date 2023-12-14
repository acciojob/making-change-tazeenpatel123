function makeChange(amount) {
  const coins = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  while (amount > 0) {
    if (amount >= 25) {
      coins.q++;
      amount -= 25;
    } else if (amount >= 10) {
      coins.d++;
      amount -= 10;
    } else if (amount >= 5) {
      coins.n++;
      amount -= 5;
    } else {
      coins.p += amount;
      amount = 0;
    }
  }

  return coins;
}
// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
