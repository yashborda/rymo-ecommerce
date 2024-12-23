import data from '@/data/data.json';

export default defineCachedEventHandler((e) => {
    const id = e.context.params.id;
    const product = data.find((product) => product.id === id);
    if(e.node.req.method === 'GET') {
        return product || {};
    } else {
        return {
            "message": 'Method not allowed'
        }
    }
})