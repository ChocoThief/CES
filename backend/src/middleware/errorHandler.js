const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Multer errors
  if (err.name === "MulterError") {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res
        .status(400)
        .json({
          error: "파일 크기가 너무 큽니다. 최대 1GB까지 업로드 가능합니다.",
        });
    }
    return res.status(400).json({ error: err.message });
  }

  // Sequelize validation errors
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      error: "입력 값 검증 오류",
      details: err.errors.map((e) => e.message),
    });
  }

  // Sequelize database errors
  if (err.name === "SequelizeDatabaseError") {
    console.error("Database error:", err.message);
    return res.status(500).json({
      error: "데이터베이스 작업 중 오류가 발생했습니다.",
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ error: "유효하지 않은 토큰입니다." });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({ error: "토큰이 만료되었습니다." });
  }

  // Default error (production vs development)
  const isDevelopment = process.env.NODE_ENV === "development";
  res.status(err.status || 500).json({
    error: isDevelopment ? err.message : "서버 내부 오류가 발생했습니다.",
  });
};

module.exports = errorHandler;
