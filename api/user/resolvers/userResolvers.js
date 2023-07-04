const { GraphQLScalarType } = require('graphql')

const userResolvers = {

    RolesType: {
        ESTUDANTE: "ESTUDANTE",
        DOCENTE: "DOCENTE",
        COORDENACAO: "COORDENACAO"
    },

    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'String de data e hora no formato I,SO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value) 
    }),

    Query: {
        users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
    },

    Mutation: {
        createUser: async(root, user, { dataSources }) => dataSources.usersAPI.createUser(user),
        updateUser: async(root, data, { dataSources }) => dataSources.usersAPI.updateUser(data),
        deleteUser: async (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
    }
};

module.exports = userResolvers;