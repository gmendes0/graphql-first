const User = require("../../../models/User");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { _id }) => User.findById(_id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { _id, data }) =>
      User.findByIdAndUpdate(_id, data, { new: true }),
    deleteUser: async (_, { _id }) => !!(await User.findByIdAndDelete(_id)),
  },
};
