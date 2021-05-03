import Company from "../models/companyModel.js";
import asyncHandler from "express-async-handler";

//description:  Fetch All Company
//route : Get/api/companies/:keyword&
//access: Public
const getCompany = asyncHandler(async (req, res) => {
 const keyword = req.query.keyword
  ? {
   name: {
     $regex : req.query.keyword,
     $options : "i",
   },
 }
 : {};
 console.log(keyword);
  const company = await Company.find({...keyword});
  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ message: "company not found" });
  }
  
});

//description:  Fetch a company
//route : Get/api/companies/:id
//access: Public

const getCompanyById = asyncHandler(async (req, res) => {
  // const product = products.find(p => p._id === req.params.id)
  const company = await Company.findById(req.params.id);

  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ message: "company not found" });
  }
});

// @desc    Delete a company
// @route   DELETE /api/companies/:id
// @access  Private/Admin
const deleteCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);

  if (company) {
    await company.remove();
    res.json({ message: "Company removed" });
  } else {
    res.status(404);
    throw new Error("company not found");
  }
});

// @desc    Create a company
// @route   POST /api/companies
// @access  Private/Admin
const createCompany = asyncHandler(async (req, res) => {
  //   const company = new Company({
  //     name: "Sample name",
  //     address: "Sample address",
  //    user:req.user.id,
  //   });

  //   const createdCompany = await company.save();
  //   res.status(201).json(createdCompany);
  // });

  const { name, address } = req.body;

  const company = await Company.create({
    name,
    address,

    user: req.user.id,
  });
  if (company) {
    res.status(200).json({
      _id: company._id,
      name: company.name,
      address: company.address,
      owner: company.owner,
      employee: company.employee,
    });
  } else {
    res.status(400);
    throw new Error("Invalid company");
  }
});

// @desc    Update a company
// @route   PUT /api/companies/:id
// @access  Private/Admin
const updateCompany = asyncHandler(async (req, res) => {
  const { name, address } = req.body;

  const company = await Company.findById(req.params.id);

  if (company) {
    company.name = name || company.name;
    company.address = address || company.address;

    const updatedCompany = await company.save();
    res.json(updatedCompany);
  } else {
    res.status(404);
    throw new Error("company not found");
  }
});

// @desc    Create a owner
// @route   POST /api/companies/:id/owner
// @access  Private/Admin
const createOwner = asyncHandler(async (req, res) => {
  const { name, title } = req.body;

  const company = await Company.findById(req.params.id);

  const owner = {
    name,
    title,
  };

  company.owner.push(owner);
  await company.save();

  if (company) {
    res.status(200).json({
      _id: owner._id,
      name: owner.name,
      title: owner.title,
    });
  } else {
    res.status(400);
    throw new Error("Invalid owner");
  }
});

// @desc    Create an employee
// @route   POST /api/companies/:id/employee
// @access  Private/Admin
const createEmployee = asyncHandler(async (req, res) => {
  const { name, title } = req.body;

  const company = await Company.findById(req.params.id);

  const employee = {
    name,
    title,
  };

  company.employee.push(employee);
  await company.save();

  if (company) {
    res.status(200).json({
      _id: employee._id,
      name: employee.name,
      title: employee.title,
    });
  } else {
    res.status(400);
    throw new Error("Invalid owner");
  }
});

export {
  getCompany,
  getCompanyById,
  deleteCompany,
  createCompany,
  updateCompany,
  createOwner,
  createEmployee,
};
