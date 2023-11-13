import httpClient from '@/services/network-service/httpClient';
import { singUpProps, singInProps } from './interfaces';

const linksApi = {
  allLinks: 'useful-links',
  singIn: 'login',
  singUp: 'singup',
};

async function getAllLinks() {
  try {
    const { status, data } = await httpClient().get(linksApi.allLinks);
    if (!status.toString().startsWith('2')) throw new Error('Loading failed');
    return data;
  } catch (error) {
    console.warn('Loading failed');
    throw new Error('Loading failed');
  }
}

async function singUp(email: string, password: string): Promise<singUpProps> {
  try {
    const { status, data } = await httpClient().post(linksApi.singUp, { email, password });
    if (!status.toString().startsWith('2')) throw new Error('Loading failed');
    return data;
  } catch (error) {
    console.warn('Loading failed');
    throw new Error('Loading failed');
  }
}

async function singIn(email: string, password: string): Promise<singInProps> {
  try {
    const { status, data } = await httpClient().post(linksApi.singIn, { email, password });
    if (!status.toString().startsWith('2')) throw new Error('Loading failed');
    return data;
  } catch (error) {
    console.warn('Loading failed');
    throw new Error('Loading failed');
  }
}

export { getAllLinks, singUp, singIn };
