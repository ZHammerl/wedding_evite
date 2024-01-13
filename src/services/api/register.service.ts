import axios from "axios";
import { RegisterProps } from "@interfaces/interfaces";

class RegisterService {
  // development base url
  private BASE_URL = "http://localhost:9090/api/v1";
  async signup(registerData: RegisterProps): Promise<RegisterProps> {
    try {
      const response = await axios.post(`${this.BASE_URL}/signup`, {
        username: registerData.name,
        lastName: registerData.lastName,
        email: registerData.email,
        password: registerData.password,
      });
      console.log(response);
      return response.data as RegisterProps;
    } catch (e) {
      console.error(`Error login`, e);
      throw e;
    }
  }
}

export const registerService = new RegisterService();
