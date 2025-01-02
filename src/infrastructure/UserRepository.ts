export default class UserRepository {
    private users: TUser[];

    constructor() {
        this.users = [
            {id: '1', name: 'Alice'},
            {id: '2', name: 'Bob'},
            {id: '3', name: 'Charlie'},
        ];
    }

    async findAll(): Promise<TUser[]> {
        return this.users;
    }

    async get(id: string): Promise<TUser> {
        const user: TUser | undefined = this.users.find(u => u.id === id);

        if (!user) {
            throw new Error('User ' + id + ' not found');
        }

        return user;
    }
}