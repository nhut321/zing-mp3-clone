import * as httpRequest from '../untils/request';

export const getMessage = async () => {
    const result = await httpRequest.get('/messages/get-chat');
    return result;
};
