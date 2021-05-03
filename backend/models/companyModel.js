import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
   
    title: { type: String, required: true },
   
    
  },
 
); 


const employeeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    
    title: { type: String, required: true },

    
  },
 
);


const companySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    
    owner: [ownerSchema],
    employee: [employeeSchema],

    
  },
  {
    timestamp: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
