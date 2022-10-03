import {greet} from './greet';

describe('greet', () =>{
  it('should include the name in the message', ()=>{
    expect(greet('mosh')).toBe('welcome mosh');
  })
  it('should include the name in the message', ()=>{
    expect(greet('yahir')).toBe('welcome yahir');
  })
  it('should include the name in the message', ()=>{
    expect(greet('Rodrigo')).toBe('welcome Rodrigo');
  })
});
