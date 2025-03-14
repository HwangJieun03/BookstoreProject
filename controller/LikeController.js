const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

// 좋아요 추가가
const addLike = (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  let sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";
  values = [user_id, id];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    return res.status(StatusCodes.OK).json(results);
  });
};

// 좋아요 취소
const deleteLike = (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  let sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?";
  values = [user_id, id];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    return res.status(StatusCodes.OK).json(results);
  });
};

module.exports = { addLike, deleteLike };
