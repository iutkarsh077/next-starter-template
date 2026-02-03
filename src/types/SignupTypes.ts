import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const SignupSchema = z.object({
  fname: z
    .string()
    .min(1, {
      message: "Name is required"
    })
    .min(3, {
      message: "Name is too small",
    })
    .max(20, {
      message: "Name is too large",
    }),

  email: z.string().min(1, {message: "Email is required"}).email({ message: "Invalid email address" }),

  address: z
    .string().min(1, {
      message: "Address is required"
    }).min(3, {
      message: "Address is too small",
    })
    .max(50, {
      message: "Address is too large",
    }),
  english: z.coerce
    .number()
    .int()
    .gte(0, {
      message: "Minimum marks is 0",
    })
    .lte(100, {
      message: "Maximum marks is 100",
    }),
  maths: z.coerce
    .number()
    .int()
    .gte(0, {
      message: "Minimum marks is 0",
    })
    .lte(100, {
      message: "Maximum marks is 100",
    }),

  password: z
    .string().min(1, {
      message: "Password is required"
    }).min(3, {
      message: "Password is too small"
    }).max(20, {
      message: "Password is too large"
    }),
});

export type SignupType = z.infer<typeof SignupSchema>;
export const SignupResolver = zodResolver(SignupSchema);
