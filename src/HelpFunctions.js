export const intersection = (array1, array2) => {
  return array1.filter((element) => {
    //return true or false depending on if array2 includes one element from array1
    return array2.includes(element);
  });
};

export const generateText = (name, age) => {
  return `${name} (${age} years old)`;
};

export const sum = (a, b) => {
  return a + b;
};
