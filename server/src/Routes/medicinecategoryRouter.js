const express = require('express');
const medicinecategoryModel = require('../Models/medicinecategoryModel');
const medicinesubcategoryModel = require('../Models/medicinesubcategoryModel');
const multer = require('multer');
const medicinecatgoryRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
medicinecatgoryRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})


medicinecatgoryRouter.get('/view-category', async (req, res) => {
  try {
    const category = await medicinecategoryModel.find();
    if (category.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: category,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No data found',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

medicinecatgoryRouter.put('/edit-category/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedData = {
      categoryname: req.body.categoryname,
      categoryimage: req.body.categoryimage,
    };

    const updatedCategory = await medicinecategoryModel.findByIdAndUpdate(categoryId, updatedData, { new: true });

    if (updatedCategory) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Medicine category updated successfully',
        data: updatedCategory,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Medicine category not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

medicinecatgoryRouter.delete('/delete-category/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await medicinecategoryModel.findByIdAndDelete(categoryId);
    if (deletedCategory) {
      return res.status(200).json({
        success: true,
        error: false,
        message: ' Medicine category deleted successfully',
        data: deletedCategory,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Medicine category not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

medicinecatgoryRouter.post('/medicine_category', async (req, res) => {
  try {
    const data = {
      categoryname: req.body.categoryname,
      categoryimage: req.body.categoryimage,
    };
    const savedData = await medicinecategoryModel.create(data);

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Registration completed',
        details: savedData,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});
medicinecatgoryRouter.get('/view-subcategory', async (req, res) => {
  try {
    const users = await medicinesubcategoryModel.aggregate([
      {
        $lookup: {
          from: 'medicinecategory_tbs',
          localField: 'category_id',
          foreignField: '_id',
          as: 'category'
        }
      },
      {
        $unwind: '$category'
      },
      {
        $group: {
          _id: '$_id',
          categoryname: { $first: '$category.categoryname' },
          subcategoryname: { $first: '$subcategoryname' },
          subcategoryimage: { $first: '$subcategoryimage' }
        }
      }
    ]);

    if (users.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No data found'
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error
    });
  }
});

medicinecatgoryRouter.get('/view-subcategory/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const subcategory = await medicinesubcategoryModel.find({ category_id: id });
    if (subcategory.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: subcategory,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No data found',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

medicinecatgoryRouter.post('/medicine_subcategory/', async (req, res) => {
  try {
    const data = {
      category_id: req.body.category_id,
      subcategoryname: req.body.subcategoryname,
      subcategoryimage: req.body.subcategoryimage,
    };
    const savedData = await medicinesubcategoryModel.create(data);

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Registration completed',
        details: savedData,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

medicinecatgoryRouter.delete('/delete-subcategory/:id', async (req, res) => {
  try {
    const subcategoryId = req.params.id;
    const deletedsubCategory = await medicinesubcategoryModel.findByIdAndDelete(subcategoryId);
    if (deletedsubCategory) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Medicine subcategory deleted successfully',
        data: deletedsubCategory,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Medicine subcategory not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});
medicinecatgoryRouter.put('/edit-subcategory/:id', async (req, res) => {
  try {
    const subcategoryId = req.params.id;
    const updatedData = {
      category_id: req.body.category,
      subcategoryname: req.body.subcategoryname,
      subcategoryimage: req.body.subcategoryimage,
    };

    const updatedSubcategory = await medicinesubcategoryModel.findByIdAndUpdate(subcategoryId, updatedData, { new: true });

    if (updatedSubcategory) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Medicine category updated successfully',
        data: updatedSubcategory,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Medicine category not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

module.exports = medicinecatgoryRouter;
