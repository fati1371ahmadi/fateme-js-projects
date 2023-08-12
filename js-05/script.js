function fillArrayWithRandomObjects(count) {
    const array = [];
  
    for (let i = 0; i < count; i++) {
      array.push({
        number: Math.floor(Math.random() * 100) + 1,
        date: new Date(Math.random() * (Date.now() - new Date(2000, 6, 1)) + new Date(2000, 6, 1)),
        word: Math.random().toString(36).substring(2, 7)
      });
    }
  
    return array;
  }
  
  const numberOfObjects = 5;
  const myArray = fillArrayWithRandomObjects(numberOfObjects);
  
  console.log(myArray);
  