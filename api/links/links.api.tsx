import httpClient from '@/services/network-service/httpClient';
import {
  SignUpResponseProps,
  SingUpErrorResponseProps,
  SingInResponseProps,
  SingInErrorResponseProps,
  SingInWithTokenErrorResponseProps,
  SingInWithTokenResponseProps,
  LogOutResponseProps,
  RefreshTokenErrorResponseProps,
  RefreshTokenResponseProps,
} from './interfaces';

const linksApi = {
  allLinks: 'useful-links',
  signIn: 'login',
  signUp: 'signup',
  logout: 'logout',
  singInWithToken: 'login-with-token',
  refreshToken: 'refresh-token',
};

export async function getAllLinks() {
  try {
    const { status, data } = await httpClient().get(linksApi.allLinks);

    if (!data) throw new Error('LoadigetAllLinksng failed');

    if (!status.toString().startsWith('2')) throw new Error('getAllLinks failed');
    return data;
  } catch (error) {
    console.warn('getAllLinks failed');
    throw new Error('getAllLinks failed');
  }
}

export async function logOut(email: string, token: string): Promise<LogOutResponseProps> {
  try {
    const { status, data } = await httpClient(token).post(linksApi.logout, { email });

    if (!data) throw new Error('Log out failed');

    if (status.toString().startsWith('2')) {
      let response: LogOutResponseProps = { message: data.message, status };
      return response;
    } else {
      throw new Error('Log-out failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      // Axios error with response data
      const responseData = error.response.data;
      const responseStatus = error.response.status;
      let errorResponse: LogOutResponseProps = { message: responseData.message, status: responseStatus };
      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during log-out:', error);

      // Handle the error or throw it again if needed
      throw new Error('Log-out failed');
    }
  }
}
export async function signUp(email: string, password: string): Promise<SignUpResponseProps | SingUpErrorResponseProps> {
  try {
    const { status, data } = await httpClient().post(linksApi.signUp, { email, password });

    if (!data) throw new Error('Sign up failed');

    if (status.toString().startsWith('2')) {
      let response: SignUpResponseProps = { message: data.message, accessToken: data.accessToken, refreshToken: data.refreshToken, status };
      return response;
    } else {
      throw new Error('Sign-in failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      // Axios error with response data
      let errorResponse: SingUpErrorResponseProps = { message: error.response.data.message, status: error.response.status };
      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during sign-up:', error);

      // Handle the error or throw it again if needed
      throw new Error('Sign-up failed');
    }
  }
}

export async function signIn(email: string, password: string): Promise<SingInResponseProps | SingInErrorResponseProps> {
  try {
    const { status, data } = await httpClient().post(linksApi.signIn, { email, password });

    if (!data) throw new Error('Sign-in failed');

    if (status.toString().startsWith('2')) {
      let response: SingInResponseProps = { accessToken: data.accessToken, refreshToken: data.refreshToken, status };
      return response;
    } else {
      throw new Error('Sign-in failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      let errorResponse: SingInErrorResponseProps = { message: error.response.data.message, status: error.response.status };
      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during sign-in:', error);

      // Handle the error or throw it again if needed
      throw new Error('Sign-in failed');
    }
  }
}

export async function singInWithToken(token: string): Promise<SingInWithTokenResponseProps | SingInWithTokenErrorResponseProps> {
  try {
    const { status, data } = await httpClient(token).get(linksApi.singInWithToken);

    if (!data) throw new Error('Sign-in with token failed');

    if (status.toString().startsWith('2')) {
      let response: SingInWithTokenResponseProps = { message: data.message, accessToken: data.accessToken, refreshToken: data.refreshToken, status };
      return response;
    } else if (status.toString().startsWith('4')) {
      let errorResponse: SingInWithTokenErrorResponseProps = { message: data.message, status };
      return errorResponse;
    } else {
      throw new Error('Sign-in with token failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      let errorResponse: SingInWithTokenErrorResponseProps = { message: error.response.data.message, status: error.response.status };

      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during sign-in with token:', error);

      // Handle the error or throw it again if needed
      throw new Error('Sign-in failed with toke4');
    }
  }
}

export async function refreshToken(refreshToken: string): Promise<RefreshTokenResponseProps | RefreshTokenErrorResponseProps> {
  try {
    const { status, data } = await httpClient(refreshToken).get(linksApi.refreshToken);

    if (!data) throw new Error('refresh token failed');

    if (status.toString().startsWith('2')) {
      let response: RefreshTokenResponseProps = { message: data.message, accessToken: data.accessToken, status };
      return response;
    } else {
      throw new Error('refresh token failed', data);
    }
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      let errorResponse: RefreshTokenErrorResponseProps = { message: error.response.data.message, status: error.response.status };
      return errorResponse;
    } else {
      // Non-Axios error
      console.error('Error during refresh token failed:', error);

      // Handle the error or throw it again if needed
      throw new Error('refresh token failed');
    }
  }
}
