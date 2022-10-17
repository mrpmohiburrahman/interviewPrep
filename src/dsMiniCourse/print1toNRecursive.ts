const print1toN = (n) => {
  if (n === 101) return;
  console.log(n);
  print1toN(n + 1);
};
print1toN(1);
