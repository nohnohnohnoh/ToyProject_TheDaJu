const { mongoose } = require("mongoose");
const { Router } = require("express");
const { Cart } = require("../models/Cart");

const cartRouter = Router();

cartRouter.post("/", async (req, res) => {
  try {
    if (!req.user) throw new Error("권환이 없습니다.");
    const { _id, src, name, price, quantity } = req.body;
    if (quantity === 0)
      throw new Error("1개 이상이어야 장바구니에 등록이 가능합니다.");
    await new Cart({
      user: {
        _id: req.user._id,
      },
      product_id: _id,
      src,
      name,
      price,
      quantity,
    }).save();
    return res.json({ message: "장바구니에 등록하였습니다." });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

cartRouter.get("/", async (req, res) => {
  try {
    const { _id } = req.user;
    if (!req.user) throw new Error("권환이 없습니다.");
    const cart = await Cart.find({ "user._id": _id }).sort({ createdAt: -1 });
    if (!cart) throw new Error("유효하지 않은 유저");
    return res.json({ cart });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

cartRouter.delete("/", async (req, res) => {
  try {
    const { _id, type } = req.body;
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).send("유효하지 않은 아이디");
    const cart = await Cart.findOneAndDelete({ _id });
    return res.json({ cart });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

cartRouter.patch("/", async (req, res) => {
  try {
    const { _id, quantity } = req.body;
    if (!mongoose.isValidObjectId(_id)) throw new Error("유효하지 않은 아이디");
    if (typeof quantity !== "number") throw new Error("숫자 타입이 아닙니다.");
    if (quantity === 0) throw new Error("수량은 0개 이상입니다.");
    const cartQuantity = await Cart.findByIdAndUpdate(
      { _id },
      { quantity },
      { new: true }
    );
    return res.json({ cartQuantity });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = { cartRouter };
