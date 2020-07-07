// fetch = jest.fn(() => Promise.resolve());

test('Jest Example - Principais funções do Jest', () => {
  expect(1 + 2).toBe(3);
});

test('Jest Example - two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('Jest Example - object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('Jest Example - adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a += 1) {
    for (let b = 1; b < 10; b += 1) {
      expect(a + b).not.toBe(0);
    }
  }
});

// REFERENCES TO TRUTHINESS
//
// toBeNull - matches only null
// toBeUndefined - matches only undefined
// toBeDefined - is the opposite of toBeUndefined
// toBeTruthy - matches anything that an if statement treats as true
// toBeFalsy - matches anything that an if statement treats as false

test('Jest Example - null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('Jest Example - zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// REFERENCES TO NUMBERS

test('Jest Example - two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('Jest Example - adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// REFERENCES TO STRINGS

test('Jest Example - there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('Jest Example - but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// REFERENCES TO ARRAYS AND ITERABLES

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('Jest Example - the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

// REFERENCE TO EXCEPTIONS

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('Jest Example - compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});

// REFERENCES TO ASYNC/AWAYT
// https://jestjs.io/docs/en/asynchronous

// test('Jest Example - the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
// });

// test('Jest Example - the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//         await fetchData();
//     } catch (e) {
//         expect(e).toMatch('error');
//     }
// });

// You can combine async and await with .resolves or .rejects.

// test('Jest Example - the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('Jest Example - the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toThrow('error');
// });
