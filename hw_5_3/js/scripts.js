let n = Number(prompt("Enter number:"))
for(let i = 1; i <= 100; i++) {
  if(n >= i ** 2) {
    console.log(i);
  }
}