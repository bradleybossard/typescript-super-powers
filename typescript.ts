const messyArray = ['something', 2, true, undefined, null];

const tuple: [number, string, string] = [24, 'what', 'e'];

function sayMyName(name: string): string {
  return name;
}

// sayMyName(32);  // error
console.log(sayMyName('heather'));

