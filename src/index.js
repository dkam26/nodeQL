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
            })
        },
        items: (root, args, context, info)=>{
            return context.prisma.items()
        }
    },
    Item: {
        owner(root, args, context){
            return context.prisma.item({id:root.id})
        }
    },
    Shoppinglist: {
        list(root, args, context){
            return context.prisma.shoppinglist({id:root.id}).list()
        }
    },
    Mutation: {
        postshopplinglist: (root, args, context) =>{
            return context.prisma.createShoppinglist({
                name:args.name,
            })
        },
        postitem: (root, args, context,info) =>{
            console.log(args.shoppinglistId)
            return context.prisma.createItem({
                name:args.item,
                price: args.price,
                owner:{
                    connect: { id: args.shoppinglistId }
                }
            })
        }
    }
}
const server =new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {prisma},
})

server.start(() => console.log(`Server is running on http://localhost:4000`))