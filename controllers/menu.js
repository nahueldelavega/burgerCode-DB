const CustomError = require("../helpers/CustomError");
const Menu = require("../models/Menu");

const addMenu = async (req, res) => {
  // try {
  //   const { menu, description, price } = req.body;
  //   const salt = await bcrypt.genSalt(10);
  //   const encryptedId = await bcrypt.hash(id, salt);
  //   menu.id = encryptedId;
  //   const newMenu = new Menu(menu);
  //   await newMenu.save();
  //   res.status(201).json({ message: "Menu creado" });
  // } catch (error) {
  //   res.status(error.code || 500).json({ message: error.message });
  // }
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
  // try {
  //     const { page } = req.query;
  //     const [ menusCount, menus ] = await Promise.all([
  //     Menu.countDocuments(),
  //     Menu.find().skip(page*5).limit(5).populate('name','status', 'details', 'price' )
  //     ])
  //     res.status(200).json({menusCount,page,menus})
  // } catch (error) {
  //     res.status(error.code || 500).json({message:error.message})
  // }
}

const autocomplete = async (req,res) =>{
  try {
      const { q } =req.query;
      const menu = await menu.find({name:{$regex:q, $options:'i'}}).select('-_id -createdAt -updatedAt');
      res.status(200).json({menu})
  } catch (error) {
      res.status(error.code || 500).json({message:error.message})
  }
}
const editMenu = async (req,res)=>{
  try {
    const {id, update} = req.body;
    const menuUpdated = await Menu.findByIdAndUpdate(id, update, {new:true});
    res.status(200).json({menuUpdated});
  } catch (error) {
    res.status(error.code || 500).json({message:error.message});
  }
}

const deleteMenu = async (req,res)=>{
  try {
    const {id} = req.body;
    const menu = await Menu.findById(id);
    if(!menu) throw new CustomError('No existe la bebida solicitada', 404);
    await Menu.findByIdAndDelete(id);
    res.status(200).json({message:"El usuario ha sido eliminado"});
  } catch (error) {
    res.status(error.code || 500).json({message:error.message});
  }
}

module.exports = {
  addMenu,
  getMenus,
  autocomplete,
  editMenu,
  deleteMenu,
};
