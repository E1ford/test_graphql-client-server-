const schema = `
  type Post {
    author: String!
    text: String!
    like: Int
    id: ID
  } 

  input PostInput {
    author: String!
    text: String!
    like: Int
    id: ID
  }

  type Query {
    getAllPosts: [Post]
    getPost(id: ID): [Post]
  }

  type Mutation {
    createPost(input: PostInput): Post
  } 
`
module.exports = {
  schema
}
