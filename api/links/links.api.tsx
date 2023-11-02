import httpClient from '@/services/network-service/httpClient';

const linksApi = {
  allLinks: 'useful-links',
};

async function getAllLinks() {
  try {
    const { status, data } = await httpClient().get(linksApi.allLinks);

    if (!status.toString().startsWith('2')) throw 'Loading failed';
    return data;
  } catch (error) {
    console.warn('Loading failed');
    throw error;
  }
}

export { getAllLinks };
