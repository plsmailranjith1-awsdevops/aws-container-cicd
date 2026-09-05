const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>AWS Container CI/CD</title>
      </head>
      <body>
        <h1>AWS Container CI/CD</h1>
        <p>Application is running successfully.</p>
        <p>Deployed using Docker, Amazon ECR, Amazon ECS Fargate and GitHub Actions.</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});