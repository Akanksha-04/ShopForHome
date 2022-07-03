import Product from "../models/product.js";
import csvtojson from 'csvtojson';
import path from 'path'


// Get all products
const get_products = async (req, res) => {
    const products = await Product.find().sort({ date: -1 });
    res.json(products);
};

// Get a single product 
const get_product = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}

//  Add a new product
const post_product = async (req, res) => {
    const newproduct = new Product(req.body);
    const product = await newproduct.save();
    res.json(product);
};

// Update a product
const update_product = async (req, res) => {
    await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product);
};

// Delete a product
const delete_product = async (req, res) => {
    const product = await Product.findByIdAndDelete({ _id: req.params.id });
    res.json({ success: true, product });
};

const bulk_upload = async (req, res) => {
    //file name
    const fileName = "./src/controllers/sample.csv";
    //file path
    const filepath = path.join(process.cwd(), fileName)
    let arrayToInsert = [];
    //csv to json
    await csvtojson().fromFile(filepath).then(async (jsonObj) => {
        // Fetching the all data from each row
        for (var i = 0; i < jsonObj.length; i++) {
            var row = {
                title: jsonObj[i]["title"],
                description: jsonObj[i]["description"],
                category: jsonObj[i]["category"],
                price: jsonObj[i]["price"],
            }
            arrayToInsert.push(row);
        }
        // Inserting the data into the database
        Product.insertMany(arrayToInsert).then(() => {
            res.json({ success: true, msg: "Data inserted  Succesfull" });
        }).catch(err => { console.log(err) });
    }).catch((err) => {
        console.log(err);
    });
}



// Export all functions
export { get_products, get_product, post_product, update_product, delete_product, bulk_upload };
