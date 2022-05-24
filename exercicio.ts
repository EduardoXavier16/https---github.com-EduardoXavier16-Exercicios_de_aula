export type User = {name: string, age: number, occupation: string};
export type Person = { name: string, age:number, role: string }; 

export const users: User[] = [ 
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];

console.log('Users:');
users.forEach(logPerson);


interface User1 {
    name: string,
    age: number,
    occupation: string
}

interface Admin {
    name: string,
    age: number,
    role: string

}



export const persons: Person ()  = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);