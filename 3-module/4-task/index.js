function showSalary(users, age) {
  return users
    .reduce((result, current) => {
      if (current.age <= age) {
        result = result + current.name + ', ' + current.balance + `\n`;
      }

      return result;
    }, '')
    .trim();
}