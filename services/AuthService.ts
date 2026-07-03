import bcrypt from "bcryptjs";
import { UserRepository } from "@/repositories/UserRepository";
import { SignUpInput, signUpSchema } from "@/validators/auth";
import { User } from "@prisma/client";

const userRepository = new UserRepository();

export class AuthService {
  /**
   * Registers a new user with email and hashed password.
   */
  async register(input: SignUpInput): Promise<User> {
    const validated = signUpSchema.parse(input);
    
    const existing = await userRepository.findByEmail(validated.email);
    if (existing) {
      throw new Error("Email is already registered");
    }

    const hashedPassword = await bcrypt.hash(validated.password, 10);
    
    return userRepository.create({
      name: validated.name,
      email: validated.email,
      password: hashedPassword,
      role: "USER",
    });
  }

  /**
   * Verifies credentials for standard login.
   */
  async verifyCredentials(email: string, password?: string): Promise<User | null> {
    if (!email || !password) return null;
    
    const user = await userRepository.findByEmail(email);
    if (!user || !user.password) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
