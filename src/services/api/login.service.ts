import axios from "axios";
import { LoginProps } from "@interfaces/interfaces";

class LoginService {
  // development base url
  private BASE_URL = "http://localhost:9090/api/v1";
  async login(loginData: LoginProps): Promise<LoginProps> {
    try {
      const response = await axios.post(`${this.BASE_URL}/signin`, {
        email: loginData.email,
        password: loginData.password,
      });
      console.log(response);
      return response.data as LoginProps;
    } catch (e) {
      console.error(`Error login`, e);
      throw e;
    }
  }
}

export const loginService = new LoginService();
