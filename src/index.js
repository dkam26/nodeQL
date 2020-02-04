const { prisma } =  require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga')


const resolvers = {
    Query :{
        shoppinglists : (root, args, context, info) =>{
            const where = args.filter ? {
                OR:[{name_contains:args.filter}],
            }:{}
            return context.prisma.shoppinglists({
                where,
            });
        },
    },
    Mutation: {
        postshopplinglist: (root, args, context) =>{
            return context.prisma.createShoppinglist({
                name:args.name,
            })
        },
        postitem
    }
}
const server =new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {prisma},
})
server.start(() => console.log(`Server is running on http://localhost:4000`))