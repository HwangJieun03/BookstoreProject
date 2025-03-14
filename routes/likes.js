const express = require("express");
const router = express.Router();
const { addLike, deleteLike } = require("../controller/LikeController");

router.use(express.json());

// 좋아요 추가
router.post("/:id", addLike);

// 좋아요 취소
router.delete("/:id", deleteLike);

module.exports = router;
