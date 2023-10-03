import networkService from '@/services/network-service/network-service';

async function login(username: string, password: string) {
  try {
    const body = {username, password};

    const {response, status, success} = await networkService.fetch('/regularUsers/', {
      method: 'POST',
      body,
    });

    if (!success) throw 'Login failed';

    return response;
  } catch (error) {
    console.warn('Login failed');
    throw error;
  }
}

export default {
  login,
};
