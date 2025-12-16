const Product = require('../models/product.model');

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Product creation failed" });

    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "product fetching failed" })

    }
}

// exports.updateProduct = async(req, res) =>{
//     try{
//         const {name} = req.body;

//         const product = await Product.findOne(Number(req.params.productId));



//     }catch(error){

//     }
// }