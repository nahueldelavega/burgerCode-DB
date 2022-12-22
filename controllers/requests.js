const Request = require('../models/Request')

const getRequest = async(req,res) => {
    const totalRequests = await Request.find()
    res.json(totalRequests)
  }

const addRequest = async(req,res) => {
  const {menu, price, specification, name, address, phone} = req.body;
  try {
    const crearRequest = new Request({  
         menu,
         price,
         specification,
         name,
         address,
         phone
       })
       crearRequest.save()
      res.json({
        message: `Request ${menu}, precio ${price} ENVIADO correctamente`
      })
    } catch (error) {
    console.error(error)
  }
}

const deleteRequest = async (req,res) => {
  const {_id} = req.params
  const request = await Request.findById(_id)
  try {
    await Request.findByIdAndDelete(request)
    res.json({
      message: `PEDIDO ${request.menu} ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  addRequest,
  getRequest,
  deleteRequest
}