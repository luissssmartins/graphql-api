const { ApolloServer, gql } = require('apollo-server');

const userSchema = require ('./user/schema/user.graphql');

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

const typeDefs = [userSchema];
const resolvers = {};

const server = new ApolloServer({typeDefs, resolvers});
