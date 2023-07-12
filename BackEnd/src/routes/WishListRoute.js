const { mongoose } = require("mongoose");
const { Router } = require("express");
const { WishList } = require("../models/WishList");

const wishListRouter = Router();

wishListRouter.post("/", async (req, res) => {
  try {
    if (!req.user) throw new Error("권환이 없습니다.");
    const { src, name, price, _id } = req.body;
    const wishProducts = await WishList.findOne({ product_id: _id });
    if (wishProducts) {
      throw new Error("이미 나의 위시리스트에 등록된 상품입니다.");
    }
    const wishList = new WishList({
      user: {
        _id: req.user._id,
      },
      product_id: _id,
      src,
      name,
      price,
    });
    await wishList.save();
    res.json({ message: "나의 위시리스트에 등록하였습니다." });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

wishListRouter.get("/", async (req, res) => {
  try {
    const { _id } = req.user;
    const { page = 1, limit = 4 } = req.query;
    if (!req.user) throw new Error("권환이 없습니다.");
    const [wishList, count] = await Promise.all([
      WishList.find({ "user._id": _id })
        .sort({
          createdAt: -1,
        })
        .limit(limit)
        .skip((page - 1) * limit),
      await WishList.count(),
    ]);
    if (!wishList) throw new Error("유효하지 않은 유저");
    return res.json({ wishList, totalPages: Math.ceil(count / limit) });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

wishListRouter.delete("/", async (req, res) => {
  const { type, id } = req.body;
  try {
    if (type === "전체삭제") {
      const wishList = await WishList.deleteMany({});
      return res.json({ wishList });
    }
    if (type === "선택삭제") {
      const wishList = await WishList.deleteMany({ select: true });
      return res.json({ wishList });
    }
    if (!mongoose.isValidObjectId(id))
      return res.status(400).send("유효하지 않은 아이디");
    const wishList = await WishList.findOneAndDelete({ _id: id });
    return res.json({ wishList });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

wishListRouter.patch("/", async (req, res) => {
  try {
    const { _id, select } = req.body;
    if (!mongoose.isValidObjectId(_id)) throw new Error("유효하지 않은 아이디");
    if (typeof select !== "boolean") throw new Error("불리언타입이 아닙니다.");
    const wishList = await WishList.findByIdAndUpdate(
      { _id },
      { select },
      { new: true }
    );
    return res.json({ wishList });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});
module.exports = { wishListRouter };