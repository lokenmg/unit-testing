import { fac } from './fac';

describe('fac test suite', () =>{
  it(' Should return 1 if n is 0', () =>{
    const result =fac(0);
    expect(result).toBe(1);
  });

  it('Should return 0 if n is negative', () =>{
    const result =fac(-2);
    expect(result).toBe(0);
  });

  it('Should return 6 if n is 3', () =>{
    const result =fac(3);
    expect(result).toBe(6);
  });

  it('Should return 24 if n is 4', () =>{
    const result =fac(4);
    expect(result).toBe(24);
  });

  it('Should return 120 if n is 5', () =>{
    const result =fac(5);
    expect(result).toBe(120);
  });

  it('Should return 0 if n > 16', () =>{
    const result =fac(19);
    expect(result).toBe(0);
  });
});
