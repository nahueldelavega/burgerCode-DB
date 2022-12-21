const Menu = require("../models/Menu");

const addMenu = async (req, res) => {
  const {menu, description, price} = req.body;
  try {
    const crearMenu = new Menu({
         menu,
         description,
         price
       })
       crearMenu.save()
      res.json({
        message: `Menu ${menu}, precio $${price} ENVIADO correctamente`
      })
    } catch (error) {
    console.error(error)
  }
};

const getMenus = async (req,res)=>{
  try {
    const totalMenus = await Menu.find()
      res.json(totalMenus)
  } catch (error) {
    console.error(error)
  }
}

const editMenu = async (req,res) => {
  const { _id, menu, description, price } = req.body
  try {
    const findAndEditMenu = await Menu.findByIdAndUpdate(_id, {
      menu,
      description, 
      price
    })
    res.json({
      message: `MENU ${findAndEditMenu.menu} modificado correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

const deleteMenu = async (req,res) => {
  const {_id } = req.params
  
  const menu = await Menu.findById(_id)

  try {
    await Menu.findByIdAndDelete(menu)
    res.json({
      message: `PRODUCTO ${menu.menu} ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  addMenu,
  getMenus,
  editMenu,
  deleteMenu
}
