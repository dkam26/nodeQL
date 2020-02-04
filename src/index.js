const { prisma } =  require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')


const resolvers = {
    Query,
    Item: {
        owner(root, args, context){
            return context.prisma.item({id:root.id}).owner()
        }
    },
    Shoppinglist: {
        list(root, args, context){
            return context.prisma.shoppinglist({id:root.id}).list()
        }
    },
    Mutation,
}
const server =new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {prisma},
})

server.start(() => console.log(`Server is running on http://localhost:4000`))