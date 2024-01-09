import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: 'http://localhost:8081/getzhendong1',
        method: 'post'
    });
};

export const getData = () => {
    return request({
        url: 'https://www.fastmock.site/mock/dc695d037038802def4b989ba4650c3f/vms/getUser',
        method: 'post'
    });
};
 