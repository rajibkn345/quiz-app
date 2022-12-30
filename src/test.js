let num = 0;

const printNumber = () => {
  num++;
  console.log(num);
  if (num >= 3) {
    clearInterval(printer);
  }
};

const printer = setInterval(printNumber, 1000);
