const posts = [
];

const resolvers = {
  Query: {
    getAllPosts: () => {
      return posts;
    },
    getPost: (_, {id}) => {
      return [posts.find(post => post.id == id )]
    },

  },
  Mutation: {
    createPost: (_, {input: {author, text}}) => {
      console.log('au', author, text);
      posts.push({author, text, id: Date.now()})
      return posts.at(-1);
    }
  }
}

module.exports = {
  resolvers
}