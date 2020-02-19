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

async function updatelist(parent, args, context){
    const where = args.newname ? {
        OR:[{name_contains:args.newname}],
    }:{}
    return context.prisma.updateShoppinglist({
        data:{name:args.newname},
        where: {
            name: args.oldname
          }
    })

}
module.exports = {
    postshopplinglist,
    postitem,
    updatelist
}
