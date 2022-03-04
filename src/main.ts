interface IUser {
  name: string;
  location: string;
}

function printUser(user: IUser): string {
  return `${user.name} lives in ${user.location}`;
}

const NASIM: IUser = {
  name: "Nasim",
  location: "Bangladesh",
};

const ARR = {
  one: 1,
  two: 2,
};

console.log(printUser(NASIM));
console.log(ARR.one);
