// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchedData} from '../../utils/getData';

export default async function handler() {
    const data = await fetchedData('apod');
    
    return data
}