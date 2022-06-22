function sumSalary(salaries) {

  let sum = 0;

  Object.values(salaries).forEach(el => {
    if (isFinite(el))  {
        sum += el;     
    }
});
return sum;
}