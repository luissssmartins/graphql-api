const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    
    constructor() {
        super();

        this.baseURL = 'http://localhost:3000'

        this.customResponse = {
            code: 200,
            message: 'Operação realizada com sucesso'
        }
    }

    async getUsers() {
        const users = await this.get('/users');

        return users.map(async user => ({
            id: user.id,
            nome: user.nome,
            email: user.ativo,

            role: await this.get(`/roles/${user.role}`)
        }));
    }

    async getUserById(id) {
        const user = this.get(`/users/${id}`);

        user.role = this.get(`/roles/${user.role}`);

        return user;
    }

    async createUser(user) {
        const users = await this.get('/users');

        user.id = users.length + 1;

        const role = await this.get(`roles?type=${user.role}`);

        await this.post('users', {...user, role: role[0].id});

        return ({
            ...user,
            role: role[0]
        });
    }

    async updateUser(data) {
        const role = await this.get(`roles?type=${data, user.role}`)

        await this.put(`users/${data.id}`, {...data, user, role: role[0].id})

        return ({
            ...this.customResponse,

            user: {

            ...data.user,
            role: role[0]

            }
        });
    }

    async deleteUser(id) {
        await this.delete(`users/${id}`)

        return this.customResponse
    }
}

module.exports = UsersAPI;