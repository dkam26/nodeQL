async function shoppinglists(parent, args, context){
    const where = args.filter ? {
        OR:[{name_contains:args.filter}],
    }:{}
    return await  context.prisma.shoppinglists({
        where,
    })

}

async function items(parent, args, context){
    return await context.prisma.items()

}
module.exports = {
    shoppinglists,
    items
}