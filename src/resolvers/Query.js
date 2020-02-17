async function shoppinglists(parent, args, context){
    const where = args.filter ? {
        OR:[{name_contains:args.filter}],
    }:{}
    return await  context.prisma.shoppinglists({
        where,
    })

}

async function items(parent, args, context){
    const where = args.name ? {
        OR: [
         { owner:{id:args.name }}
        ],
    }:{}
   const items = await context.prisma.items({
       where
   })
   return items

}
module.exports = {
    shoppinglists,
    items
}