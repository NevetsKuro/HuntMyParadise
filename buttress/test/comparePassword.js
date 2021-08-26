import bcrypt from "bcryptjs";

bcrypt.compare(
  "123452",
  "$2a$10$VorIVYPeX4BY9tRMcVOy9.59r6zhiHvV7dpdI5s/KgCDOLBKFrSW.",
  function (err, result) {
    console.log(result);
  }
);
