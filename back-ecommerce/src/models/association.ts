import Provincia from "./provincia"
import Direccion from "./direccion"
import Pais from "./pais"
import Usuario from "./usuario"
import Rol from "./rol"
import RolMenu from "./rol-menu"
import RolSubMenu from "./rol-submenu"
import ValidacionExtra from "./validacion-extra"
import Menu from "./menu"
import SubMenu from "./sub-menu"


// 🌍 Pais - Provincia
Provincia.belongsTo(Pais, { foreignKey: "paisId" })
Pais.hasMany(Provincia, { foreignKey: "paisId" })

// 🏠 Provincia - Dirección
Direccion.belongsTo(Provincia, { foreignKey: "provinciaId" })
Provincia.hasMany(Direccion, { foreignKey: "provinciaId" })

// 👤 Usuario - Dirección
Direccion.belongsTo(Usuario, { foreignKey: "usuarioId" })
Usuario.hasMany(Direccion, { foreignKey: "usuarioId" })

// 👤 Usuario - Rol
Usuario.belongsTo(Rol, { foreignKey: "rolId" })
Rol.hasMany(Usuario, { foreignKey: "rolId" })

// 🔐 Rol - Menu (tabla intermedia)
Rol.hasMany(RolMenu, { foreignKey: "rolId" })
RolMenu.belongsTo(Rol, { foreignKey: "rolId" })

Menu.hasMany(RolMenu, { foreignKey: "menuId" })
RolMenu.belongsTo(Menu, { foreignKey: "menuId" })

// 🔐 Rol - SubMenu (tabla intermedia)
Rol.hasMany(RolSubMenu, { foreignKey: "rolId" })
RolSubMenu.belongsTo(Rol, { foreignKey: "rolId" })

SubMenu.hasMany(RolSubMenu, { foreignKey: "subMenuId" })
RolSubMenu.belongsTo(SubMenu, { foreignKey: "subMenuId" })

// ➕ Validaciones extra
RolMenu.belongsTo(ValidacionExtra, { foreignKey: "validacionExtraId" })
ValidacionExtra.hasMany(RolMenu, { foreignKey: "validacionExtraId" })

RolSubMenu.belongsTo(ValidacionExtra, { foreignKey: "validacionExtraId" })
ValidacionExtra.hasMany(RolSubMenu, { foreignKey: "validacionExtraId" })
