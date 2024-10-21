import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "Mohit",
    lastName: "Soni",
  },
});

console.log("done");
