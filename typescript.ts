const messyArray:any = ['something', 2, true, undefined, null];

let randomStrings: string[] = ['one', 'two', 'three'];

const tuple: [number, string, string] = [24, 'what', 'e'];

function sayMyName(name: string): string {
  return name;
}

// sayMyName(32);  // error
console.log(sayMyName('heather'));

