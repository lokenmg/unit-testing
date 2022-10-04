import { pow } from './pow';

describe('pow test suite', () =>{
  it('Should return 1 if exponent = 0', () =>{
    const result =pow(1, 0);
    expect(result).toBe(1);
  });

  it('Should return 0 if exponent is negative', () =>{
    const result =pow(1 , -2);
    expect(result).toBe(0);
  });

  it('hould return 8 if base=2, exponent=3', () =>{
    const result =pow(2 , 3);
    expect(result).toBe(8);
  });

  it('Should return 9 if base=3, exponent=2', () =>{
    const result =pow(3 , 2);
    expect(result).toBe(9);
  });
});
