import request from '../utils/request';

export const fetchData1 = () => {
    return request({
        url: 'http://localhost:8081/getzhendong1',
        method: 'post'
    });
};
export const fetchData2 = () => {
    return request({
        url: 'http://localhost:8081/getzhendong2',
        method: 'post'
    });
};
export const fetchData3 = () => {
    return request({
        url: 'http://localhost:8081/getzhendong3',
        method: 'post'
    });
};
export const fetchData4 = () => {
    return request({
        url: 'http://localhost:8081/getzhendong4',
        method: 'post'
    });
};
export const fetchData5 = () => {
    return request({
        url: 'http://localhost:8081/getzhendong5',
        method: 'post'
    });
};
export const fetchData6 = () => {
    return request({
        url: 'http://localhost:8081/getzhendong6',
        method: 'post'
    });
};

export const getData = () => {
    return request({
        url: 'https://www.fastmock.site/mock/dc695d037038802def4b989ba4650c3f/vms/getUser',
        method: 'post'
    });
};
export const save = (data) => {
    return request({
        url: 'http://localhost:8081/save',
        method: 'post',
        data
    });
};

export const getList = () => {
    return request({
        url: 'http://localhost:8081/listAllYz',
        method: 'get',
    });
};