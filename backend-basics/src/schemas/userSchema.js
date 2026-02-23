const { z } = require("zod");

const createUserSchema = z.object({
  name: z.string().trim().min(1, "name is required").regex(/^[A-Za-z ]+$/,"name must contain only letters and spaces"),
  age: z.coerce.number().min(1, "age must be greater than 0"),
  email: z.string().trim().email("invalid email")
});

module.exports = createUserSchema;
