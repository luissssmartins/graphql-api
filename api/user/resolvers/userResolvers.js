const userResolvers = {
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