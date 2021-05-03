import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
   
    title: { type: String, required: true },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
      },
    
  },
 
); 


const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;