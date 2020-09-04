const Post = require("../../../models/Post");

module.exports = {
  Query: {
    posts: () => Post.find(),
    post: (_, { _id }) => Post.findById(_id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { _id, data }) =>
      Post.findByIdAndUpdate(_id, data, { new: true }),
    deletePost: async (_, { _id }) => !!(await User.findByIdAndDelete(_id)),
  },
};
