const { Router } = require("express");
const { MyOrder } = require("../models/MyOrder");

const myorderRouter = Router();

myorderRouter.post("/", async (req, res) => {
  try {
    if (!req.user) throw new Error("권환이 없습니다.");
    const { src, name, price, quantity } = req.body;
    if (quantity === 0) throw new Error("1개 이상이여야 구매가 가능합니다.");
    const myOrder = new MyOrder({
      user: {
        _id: req.user._id,
      },
      src,
      name,
      price,
      quantity,
    });
    await myOrder.save();
    res.json({ message: "구매가 완료되었습니다." });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

myorderRouter.get("/", async (req, res) => {
  try {
    const { _id } = req.user;
    if (!req.user) throw new Error("권환이 없습니다.");
    const myOrders = await MyOrder.find({ "user._id": _id }).sort({
      createdAt: -1,
    });
    if (!myOrders) throw new Error("유효하지 않은 유저");
    return res.json({ myOrders });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = { myorderRouter };