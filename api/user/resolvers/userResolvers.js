const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
    },

    Mutation: {
        createUser: async(root, user, { dataSources }) => dataSources.usersAPI.createUser(user)
    }
};

module.exports = userResolvers;