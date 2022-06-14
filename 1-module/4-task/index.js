function checkSpam(str) {
  let toLower = str.toLowerCase();
  if (toLower.includes('1xbet') || 
      toLower.includes('xxx'))
      {
          return true;
      }
  return false;
}
