function receivesAFunction (callbackFxn) {
    return callbackFxn();
}
receivesAFunction (function () { return 9 * 4 });


function returnsANamedFunction () {
  const someNum = (numArray) => { return [1,2,3,4,5]; };
  return someNum;
};
returnsANamedFunction(someNum);


function returnsAnAnonymousFunction () {
    return function () {
        console.log('Buenos Dias');
    };
}
returnsAnAnonymousFunction();