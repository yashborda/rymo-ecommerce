import data from '@/data/data.json';

export default defineCachedEventHandler((e) => {
    if(e.node.req.method === 'GET') {
        return data;
    } else {
        return {
            "message": 'Method not allowed'
        }
    }
})