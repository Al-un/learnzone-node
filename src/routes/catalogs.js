var secured = require("../middleware/secured");
var router = require("express").Router();

const { CatalogController } = require("../controllers/catalog");
var controller = new CatalogController();

router.get("/", controller.list);
router.get("/new", secured, controller.new);
router.get("/search", controller.search);
router.get("/:id", controller.show);
router.get("/:id/edit", secured, controller.edit);
router.post("/", secured, controller.create);
router.put("/:id", secured, controller.update);
router.patch("/:id", secured, controller.update);
router.delete("/:id", secured, controller.delete);

module.exports = router;
