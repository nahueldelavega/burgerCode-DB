const Request = require("../models/Request")

const postRequest = async(req,res) => {
  try {
    const { product, price, specification} = req.body
    const sendRequest = new Request({
      product,
      price,
      specification
    })
  await sendRequest.save() 
    // res.end(data) 
    res.status(200).json(sendRequest)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}

module.exports = {
  postRequest
}