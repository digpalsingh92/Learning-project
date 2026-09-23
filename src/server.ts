import app from "./app";
import { PORT } from "./config/env";
import { prisma } from "./lib/prisma";

app.listen(PORT, async () => {
  await prisma.$connect();
  console.log("Database connected successfully");
  console.log(`Server is running on http://localhost:${PORT}`);
});
