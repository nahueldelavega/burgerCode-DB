const Menu = require("../models/Menu");

const addMenu = async (req, res) => {
  try {
    const { menu, name, description, price} = req.body
    const sendMenu = new Menu({
      menu,
      name,
      description,
      price
    })
  await sendMenu.save() 
    // res.end(data) 
    res.json(sendMenu)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}

module.exports = {
  addMenu
};
