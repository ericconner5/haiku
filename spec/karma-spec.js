import {parseLines} from './../src/main.js';
describe('Line-Check', function(){


  it('should check if poem has empty lines', function(){
    let line1 = 'a';
    let line2 = 'a';
    let line3 = '';

    expect(line1.length).toEqual(1);
    expect(line2.length).toEqual(1);
    expect(line3.length).toEqual(1);
  });
});
//this test is working to find 1 character in the haiku input field.
