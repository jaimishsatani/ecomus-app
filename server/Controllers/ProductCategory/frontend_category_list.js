const category = require("../../Models/category");

const frontendcategorylist = async (req, res) => {
  try {
    const categories = await category.find({ status: "Active" });

    const mainCategories = [];
    const categoriesMap = new Map();

    categories.forEach((cat) => {
      categoriesMap.set(cat._id.toString(), { ...cat._doc, subcategories: [] });
    });

    categories.forEach((cat) => {
      if (cat.parentcategory.length === 0) {
        mainCategories.push(categoriesMap.get(cat._id.toString()));
      } else {
        const parentCategory = categoriesMap.get(
          cat.parentcategory[0].toString()
        );
        if (parentCategory) {
          parentCategory.subcategories.push(cat);
        }
      }
    });

    // Send the organized categories as a response
    res.status(200).json({ status: "success", data: mainCategories });
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};

// Export the router
module.exports = frontendcategorylist;
