const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { name, company, featured, sort, select } = req.query;
  const queryObject = {};
  console.log(queryObject);
  if (name) {
    //regex used for search i.e mached from data
    queryObject.name = { $regex: name, $options: "i" };
    //here "i" reperesent capital and small alphabate
  }
  //company filteration
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }
  //featured filter
  if (featured) {
    queryObject.featured = featured;
  }
  //sorting the data
  let apiData = Product.find(queryObject);
  if (sort) {
    // let sortFix = sort.replace(",", " ");
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  //select some specific data
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * 3;
  apiData = apiData.skip(skip).limit(limit);
  const products = await apiData;
  res.status(200).json({ products, nbHints: products.length });
};

const getAllProductsTesting = async (req, res) => {
  const myData2 = await Product.find({});
  //if you will do sort("-company"), you will get descending order//
  res.status(200).json({ myData2, total: myData2.length });
};

module.exports = { getAllProducts, getAllProductsTesting };
