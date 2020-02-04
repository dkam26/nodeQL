const typeDefs = `
 type Query {
    feed : [Shoppinglist!]!
 }
 type Shoppinglist {
    id: ID! @id
    name: String!
 }
`