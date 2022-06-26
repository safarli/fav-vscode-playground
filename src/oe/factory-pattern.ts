export interface IUser {
	firstName: string
	lastName: string
	email: string
}

export const createUser = ({ firstName, lastName, email }: IUser) => ({
	firstName,
	lastName,
	email,
	fullName() {
		return `${this.firstName} ${this.lastName}`
	}
})


const user1 = createUser({ firstName: "Alex", lastName: "Hopkins", email: "alex.h@company.com" })
const user2 = createUser({ firstName: "Melinda", lastName: "Watson", email: "mwatson@company.com" })