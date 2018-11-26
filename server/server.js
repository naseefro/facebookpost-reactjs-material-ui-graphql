// import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test7', { useNewUrlParser: true });

const Fbpost = mongoose.model('Fbpost', {
    username: String,
    imageurl: String,
    posts: String
});

const typeDefs = `
  type Query {
    hello(name: String): String!
    fbposts: [Fbpost]
  }
  type Fbpost{
    id:ID!
    username:String!
    imageurl:String!
    posts:String!
  }
  type Mutation{
      createPost(username: String!,imageurl:String!,posts:String!):Fbpost!
      updatePost(id:ID!,complete:Boolean):Boolean
      removePost(id:ID!):Boolean
  }
`

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
        fbposts: () => Fbpost.find()
    },
    Mutation: {
        createPost: async(_, { username, imageurl, posts }) => {
            const fbpost = new Fbpost({ username, imageurl, posts });
            await fbpost.save();
            return fbpost;
        },
        updatePost: async(_, { id, complete }) => {
            await Fbpost.findByIdAndUpdate(id, { complete });
            return true;
        },
        removePost: async(_, { id }) => {
            await Fbpost.findByIdAndRemove(id);
            return true;
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
mongoose.connection.once('open', function() {
    // we're connected
    server.start(() => console.log('Server is running on localhost:4000'))
});