module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateItem {
  count: Int!
}

type AggregateShoppinglist {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Item {
  id: ID!
  name: String!
  price: Int!
  owner: Shoppinglist
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  name: String!
  price: Int!
  owner: ShoppinglistCreateOneWithoutListInput
}

input ItemCreateManyWithoutOwnerInput {
  create: [ItemCreateWithoutOwnerInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateWithoutOwnerInput {
  id: ID
  name: String!
  price: Int!
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
  price: Int!
}

input ItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateInput {
  name: String
  price: Int
  owner: ShoppinglistUpdateOneWithoutListInput
}

input ItemUpdateManyDataInput {
  name: String
  price: Int
}

input ItemUpdateManyMutationInput {
  name: String
  price: Int
}

input ItemUpdateManyWithoutOwnerInput {
  create: [ItemCreateWithoutOwnerInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateWithoutOwnerDataInput {
  name: String
  price: Int
}

input ItemUpdateWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutOwnerDataInput!
}

input ItemUpsertWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutOwnerDataInput!
  create: ItemCreateWithoutOwnerInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  owner: ShoppinglistWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createShoppinglist(data: ShoppinglistCreateInput!): Shoppinglist!
  updateShoppinglist(data: ShoppinglistUpdateInput!, where: ShoppinglistWhereUniqueInput!): Shoppinglist
  updateManyShoppinglists(data: ShoppinglistUpdateManyMutationInput!, where: ShoppinglistWhereInput): BatchPayload!
  upsertShoppinglist(where: ShoppinglistWhereUniqueInput!, create: ShoppinglistCreateInput!, update: ShoppinglistUpdateInput!): Shoppinglist!
  deleteShoppinglist(where: ShoppinglistWhereUniqueInput!): Shoppinglist
  deleteManyShoppinglists(where: ShoppinglistWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  shoppinglist(where: ShoppinglistWhereUniqueInput!): Shoppinglist
  shoppinglists(where: ShoppinglistWhereInput, orderBy: ShoppinglistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shoppinglist]!
  shoppinglistsConnection(where: ShoppinglistWhereInput, orderBy: ShoppinglistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShoppinglistConnection!
  node(id: ID!): Node
}

type Shoppinglist {
  id: ID!
  name: String!
  list(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

type ShoppinglistConnection {
  pageInfo: PageInfo!
  edges: [ShoppinglistEdge]!
  aggregate: AggregateShoppinglist!
}

input ShoppinglistCreateInput {
  id: ID
  name: String!
  list: ItemCreateManyWithoutOwnerInput
}

input ShoppinglistCreateOneWithoutListInput {
  create: ShoppinglistCreateWithoutListInput
  connect: ShoppinglistWhereUniqueInput
}

input ShoppinglistCreateWithoutListInput {
  id: ID
  name: String!
}

type ShoppinglistEdge {
  node: Shoppinglist!
  cursor: String!
}

enum ShoppinglistOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type ShoppinglistPreviousValues {
  id: ID!
  name: String!
}

type ShoppinglistSubscriptionPayload {
  mutation: MutationType!
  node: Shoppinglist
  updatedFields: [String!]
  previousValues: ShoppinglistPreviousValues
}

input ShoppinglistSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShoppinglistWhereInput
  AND: [ShoppinglistSubscriptionWhereInput!]
  OR: [ShoppinglistSubscriptionWhereInput!]
  NOT: [ShoppinglistSubscriptionWhereInput!]
}

input ShoppinglistUpdateInput {
  name: String
  list: ItemUpdateManyWithoutOwnerInput
}

input ShoppinglistUpdateManyMutationInput {
  name: String
}

input ShoppinglistUpdateOneWithoutListInput {
  create: ShoppinglistCreateWithoutListInput
  update: ShoppinglistUpdateWithoutListDataInput
  upsert: ShoppinglistUpsertWithoutListInput
  delete: Boolean
  disconnect: Boolean
  connect: ShoppinglistWhereUniqueInput
}

input ShoppinglistUpdateWithoutListDataInput {
  name: String
}

input ShoppinglistUpsertWithoutListInput {
  update: ShoppinglistUpdateWithoutListDataInput!
  create: ShoppinglistCreateWithoutListInput!
}

input ShoppinglistWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  list_every: ItemWhereInput
  list_some: ItemWhereInput
  list_none: ItemWhereInput
  AND: [ShoppinglistWhereInput!]
  OR: [ShoppinglistWhereInput!]
  NOT: [ShoppinglistWhereInput!]
}

input ShoppinglistWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  shoppinglist(where: ShoppinglistSubscriptionWhereInput): ShoppinglistSubscriptionPayload
}
`
      }
    