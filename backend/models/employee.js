import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  name: { type: String, required: true },

  title: { type: String, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Company",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
