const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();

const { syncDatabase } = require("./models");
const errorHandler = require("./middleware/errorHandler");

// 로그에 타임스탬프 추가하는 헬퍼 함수
const logWithTimestamp = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
};

// console.log override
const originalLog = console.log;
const originalError = console.error;
console.log = (...args) => {
  const timestamp = new Date().toISOString();
  originalLog(`[${timestamp}]`, ...args);
};
console.error = (...args) => {
  const timestamp = new Date().toISOString();
  originalError(`[${timestamp}]`, ...args);
};

// Routes
const applicationsRouter = require("./routes/applications");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const docentReservationsRouter = require("./routes/docentReservations");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());

// CORS 설정 - 로컬 개발 환경에서는 모든 origin 허용
const corsOptions =
  process.env.NODE_ENV === "production"
    ? {
        origin: [
          process.env.FRONTEND_URL,
          process.env.ADMIN_URL,
          "https://www.ceskorea.kr",
          "https://ceskorea.kr",
          "https://admin.ceskorea.kr",
        ].filter(Boolean),
        credentials: true,
      }
    : {
        origin: true, // 개발 환경에서는 모든 origin 허용
        credentials: true,
      };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 서빙 (개발 환경용)
if (process.env.NODE_ENV === "development") {
  app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
}

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Routes
app.use("/api/applications", applicationsRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/docent-reservations", docentReservationsRouter);

// Error handler (must be last)
app.use(errorHandler);

// Initialize database and start server
const startServer = async () => {
  try {
    await syncDatabase();

    app.listen(PORT, () => {
      console.log(`✓ Server running on port ${PORT}`);
      console.log(`✓ Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
