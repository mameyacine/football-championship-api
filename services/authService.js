// ✅ Correct
const UserAuth = require("../models/UserAuth");

module.exports.getUserByQuery = async (query) => {
  try {
    const user = await UserAuth.findOne(query);
    return user;
  } catch (e) {
    throw new Error("Error while finding user");
  }
};
// crée un user
module.exports.createUser = async (user) => {
try { return await user.save();
} catch(e) { throw Error("Error while create user : " + e);
}
}