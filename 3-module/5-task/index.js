function getMinMax(str) {
  return str
    .split(/[\s,]+/)
    .reduce((result, current) => {
      if (!isNaN(current) && current < result.min) {
        result.min = Number(current);
      }

      if (!isNaN(current) && current > result.min) {
        result.max = Number(current);
      }

      return result;
    }, {min: null, max: null});
  }