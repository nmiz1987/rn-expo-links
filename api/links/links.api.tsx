import httpClient from "@/services/network-service/httpClient";
import { signUpProps, signInProps } from "./interfaces";

const linksApi = {
  allLinks: "useful-links",
  signIn: "login",
  signUp: "signup",
};

async function getAllLinks() {
  try {
    const { status, data } = await httpClient().get(linksApi.allLinks);

    if (!data) throw new Error("Loading failed");

    if (!status.toString().startsWith("2")) throw new Error("Loading failed");
    return data;
  } catch (error) {
    console.warn("Loading failed");
    throw new Error("Loading failed");
  }
}

async function signUp(email: string, password: string): Promise<signUpProps> {
  try {
    const { status, data } = await httpClient().post(linksApi.signUp, { email, password });

    if (!data) throw new Error("Sign up failed");

    if (!status.toString().startsWith("2")) throw new Error("Loading failed");
    return data;
  } catch (error) {
    console.warn("Loading failed");
    throw new Error("Loading failed");
  }
}

async function signIn(email: string, password: string): Promise<signInProps> {
  try {
    const { status, data } = await httpClient().post(linksApi.signIn, { email, password });

    if (!data) throw new Error("Sign in failed");

    if (!status.toString().startsWith("2")) throw new Error("Loading failed");
    return data;
  } catch (error) {
    console.warn("Loading failed");
    throw new Error("Loading failed");
  }
}

export { getAllLinks, signUp, signIn };
