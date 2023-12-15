const mongoose = require("mongoose");

const Connect = () => {
  mongoose
    .connect(
      // 'mongodb://localhost:27017/AiVirtualOps'
      'mongodb+srv://sahil:sahil123@cluster0.jcct62j.mongodb.net/?retryWrites=true&w=majority/AiVirtualOps'
    )
    //   ADDED AI VIRTUAL OPS AT THE END OF MONGO LINK MYSELF< REMOVE IF NOT WORKING
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));
};

module.exports = { Connect };
