const Request = require("../models/Request")

const postRequest = async(req,res) => {
  try {
    const { name, description, price} = req.body
    const sendRequest = new Request({
      name,
      description,
      price
    })
  await sendRequest.save() 
    // res.end(data) 
    res.status(200).json(sendRequest)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

module.exports = {
  postRequest,
  getRequests
}