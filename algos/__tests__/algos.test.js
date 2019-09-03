/* eslint-disable */
import bubble    from './../bubble.js';
import builtin   from './../builtin.js';
import count     from './../count.js';
import heap      from './../heap.js';
import insertion from './../insertion.js';
import merge     from './../merge.js';
import quick     from './../quick.js';
import selection from './../selection.js';


const sorts = [bubble, builtin, count, heap, insertion, merge, quick, selection];

describe('Displayed strings of the sort algorithms', () => {
  test('The algo strings have the correct name, type and content', () => {
    sorts.forEach(sort => {
      const type = typeof sort;
      expect(type).toBe('object');
      const keys = Object.keys(sort);
      expect(keys).toStrictEqual(['name', 'text']);
      const sortName = sort.name;
      const sortAlgo = sort.text;
      const reX = /function (.*)\(array\)/;
      expect(sortName).toEqual(reX.exec(sortAlgo)[1]);
    });
  });
});
