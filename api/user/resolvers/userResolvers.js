
const userResolvers = {
    Query: {
        users: () => users,
        firstUser: () => users[0]
    }

};

const users = [
    {
        nome: "Luis",
        ativo: true
    },
    {
        nome: "Rutileno",
        ativo: false
    }
]

module.exports = userResolvers;