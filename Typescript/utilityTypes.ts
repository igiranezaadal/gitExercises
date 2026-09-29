// type User={
//     id: string;
//     name: string;
//     age: number;
// }
// type PartialUser = Partial<User>;
// // means optianal
// type RequiredUser = Required<User>;
// // must use

// // type omitUser = Omit<User, 'id'>
// type omitUser = Omit<User, 'id' | 'name'>;//remove multiple
// // omit is used to remove property from the object

// // type pickUser = Pick<User, 'id'> //being pick me
// type pickingUser = Pick<User, 'id' | 'name'>;//pick multiple
// // pick is used to get property from the object

// // type readonlyUser= Readonly<User>
// // make it read only

// type Adal = {
//  readonly id: string;
//  readonly name: string;
//  readonly age: number;
// }
// type Mutable <T> = {
//     -readonly [K in keyof T]: T[K]
// };
// type MutableUser = Mutable<Adal>
// // make it not read only
// let AdalValue={id:'gf676',name: 'Prime Adal', age:67}
// console.log(AdalValue)

type Role= 'admin' | 'user' | 'anonymous';
type nonAdminRole =  Exclude <Role, 'admin' | 'anonymous'>;
// exclude is used to remove members from type or multiple member

type RoleAttributes ={}

