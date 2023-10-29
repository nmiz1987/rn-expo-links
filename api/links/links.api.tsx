import networkService from '@/services/network-service/network-service';
import linksStore from "@/store/links/links-store"

async function getAllLinks() {
  try {

    const { response, status, success } = await networkService.fetch('useful-links/');

    if (!success) throw 'Loading failed';

    return response;
  } catch (error) {
    console.warn('Loading failed');
    throw error;
  }
}

export {
  getAllLinks,
};
