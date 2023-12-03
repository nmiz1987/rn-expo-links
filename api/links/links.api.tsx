import httpClient from '@/services/network-service/httpClient';
import { LogOutResponseRequest, SignUpResponseRequest, SingUpErrorMessage, SingInResponseRequest, SingInErrorMessage } from './interfaces';

const linksApi = {
  allLinks: 'useful-links',
  signIn: 'login',
  signUp: 'signup',
  logout: 'logout',
};

export async function getAllLinks() {
  try {
    const { status, data } = await httpClient().get(linksApi.allLinks);

    if (!data) throw new Error('Loading failed');

    if (!status.toString().startsWith('2')) throw new Error('Loading failed');
    return data;
  } catch (error) {
    console.warn('Loading failed');
    throw new Error('Loading failed');
  }
}

export async function logOut(email: string, token: string): Promise<LogOutResponseRequest> {
  try {
    const { status, data } = await httpClient(token).post(linksApi.logout, { email });

    if (!data) throw new Error('Log out failed');

    if (status.toString().startsWith('2')) {
      let response: LogOutResponseRequest = { message: data.message, status };
      return response;
    } else {
      throw new Error('Log-out failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      // Axios error with response data
      const responseData = error.response.data;
      const responseStatus = error.response.status;
      let errorResponse: LogOutResponseRequest = { message: responseData.message, status: responseStatus };
      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during log-out:', error);

      // Handle the error or throw it again if needed
      throw new Error('Log-out failed');
    }
  }
}
export async function signUp(email: string, password: string): Promise<SignUpResponseRequest | SingUpErrorMessage> {
  try {
    const { status, data } = await httpClient().post(linksApi.signUp, { email, password });

    if (!data) throw new Error('Sign up failed');

    if (status.toString().startsWith('2')) {
      let response: SignUpResponseRequest = { message: data.message, token: data.token };
      return response;
    } else {
      throw new Error('Sign-in failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      // Axios error with response data
      const responseData = error.response.data;
      let errorResponse: SingUpErrorMessage = { message: responseData.message };
      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during sign-up:', error);

      // Handle the error or throw it again if needed
      throw new Error('Sign-up failed');
    }
  }
}

export async function signIn(email: string, password: string): Promise<SingInResponseRequest | SingInErrorMessage> {
  try {
    const { status, data } = await httpClient().post(linksApi.signIn, { email, password });

    if (!data) throw new Error('Sign-in failed');

    if (status.toString().startsWith('2')) {
      let response: SingInResponseRequest = { accessToken: data.accessToken };
      return response;
    } else {
      throw new Error('Sign-in failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      // Axios error with response data
      const responseData = error.response.data;
      let errorResponse: SingInErrorMessage = { message: responseData.message };
      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during sign-in:', error);

      // Handle the error or throw it again if needed
      throw new Error('Sign-in failed');
    }
  }
}
