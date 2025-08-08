import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  driver: "pg", 
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
