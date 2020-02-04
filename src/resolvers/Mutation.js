async function postshopplinglist(parent, args, context){
    return context.prisma.createShoppinglist({
        name:args.name,
    })

}

async function postitem(parent, args, context){
    return context.prisma.createItem({
        name:args.item,
        price: args.price,
        owner:{
            connect: { id: args.shoppinglistId }
        }
    })

}
module.exports = {
    postshopplinglist,
    postitem
}
