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
<<<<<<< HEAD
        <p>Deployed using Docker, Amazon ECR, Amazon ECS Fargate and GitHub Actions.</p>
=======
        <p>Deployed using Docker, Amazon ECR and Amazon ECS Fargate.</p>
>>>>>>> 5f0053a (Initial commit - AWS Container CI/CD project)
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
<<<<<<< HEAD
});
=======
});
>>>>>>> 5f0053a (Initial commit - AWS Container CI/CD project)
