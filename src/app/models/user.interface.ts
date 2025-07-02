export default interface User{
  readonly id: number,
  email: string,
  password: string,
  roles: string[],
  name: string,
  firstName: string,
  billingAddress: string,
  birthDate: Date,
}