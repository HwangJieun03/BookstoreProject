const express = require("express");
const router = express.Router();
const { body, param, validationResult } = require("express-validator");
const conn = require("../mariadb");
const {
  join,
  login,
  passwordResetRequest,
  passwordReset,
} = require("../controller/UserController");

router.use(express.json());

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    return next();
  } else {
    return res.status(400).json(err.array());
  }
};

// 회원가입
router.post(
  "/join",
  [
    body("email")
      .notEmpty()
      .isString()
      .isEmail()
      .withMessage("이메일 형식을 맞춰주세요."),
    body("password").notEmpty().isString().withMessage("비밀번호 확인 필요"),
    validate,
  ],
  join
);

// 로그인
router.post("/login", login);

// 비밀번호 초기화 요청
router.post("/reset", passwordResetRequest);

// 비밀번호 초기화
router.put("/reset", passwordReset);

module.exports = router;
