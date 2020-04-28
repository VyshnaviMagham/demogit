const {add,mul,sub,div}=require('./arith');
//testcases

test('2+3=5',()=>{
expect(add(2,3)).toBe(5);
});

test('3*3=9',()=>{
expect(mul(3,3)).toBe(9);
});

test('10-3=7',()=>{
expect(sub(10,3)).toBe(7);
});

test('12/6=2',()=>{
expect(div(12,6)).toBe(2);
});