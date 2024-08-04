import * as httpRequest from '../untils/request';

export const getMusicCategory = async (category, limit, page = 0) => {
    const result = await httpRequest.get('/music/get-category', {
        params: {
            category: category,
            _limit: limit,
            _page: page, 
            
        },
    });

    return result.data;
};
