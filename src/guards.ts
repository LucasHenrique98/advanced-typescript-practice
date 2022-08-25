type FirstType = {
  name: string;
  age: number;
  address: string;
};

type SecondType = {
  name: string;
  age: number;
};

const printFirstTypeInfo = (info: FirstType) => {
  console.log(info);
};

const printSecondTypeInfo = (info: SecondType) => {
  console.log(info);
};

const printTypeInformations = (info: FirstType | SecondType) => {
  // Guards using "in" typescript operator
  if ('address' in info) {
    printFirstTypeInfo(info);
  } else {
    printSecondTypeInfo(info);
  }
};

console.log('----Guards----');
printTypeInformations({ name: 'lucas', age: 20 });
