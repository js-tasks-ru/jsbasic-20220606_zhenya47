function factorial(n) {
let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer = answer * i;
  }
  return answer;
}
