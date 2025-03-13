const express = require("express");
const router = express.Router();
const { allBooks, bookDetail } = require("../controller/BookController");
router.use(express.json());


// 도서 전체 조회, 카테고리별 도서 목록 조회 
router.get("/", allBooks);

// 도서 개별 조회
router.get("/:id", bookDetail);

module.exports = router;
