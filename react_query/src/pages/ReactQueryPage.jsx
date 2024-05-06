import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const ReactQuery = () => {
    const fetchPost = () => {
        return axios.get('http://localhost:3004/posts');
    };

    // data : 서버에서 받은 data
    // isLoading : true/false로 데이터를 받아오는 중인지 알 수 있다.
    // isError : true/false로 error인지 아닌지 알 수 있다.
    // error : error 메세지를 볼 수 있다.
    const { isLoading, data, isError, error } = useQuery({
        // api호출 각각의 이름을 지정해 줄 수 있다.
        queryKey: ['posts'],
        queryFn: fetchPost,
        retry: 1, // api호출 후 실패하였을 때 추가로 호출할 횟수
        select: (data) => {
            return data.data; // 서버에서 받은 데이터 중 어떤 값만 return 할지 정할수 있다.
        },
        // gcTime은 v5부터 하위 버전은 cacheTime이라고 함
        gcTime: 5000, // ms단위 5초마다 캐시를 비운다.(기본값은 5분)
    });
    console.log('ddd', data, isLoading);
    console.log('error', isError, error);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <div>
            {data.map((item) => (
                <div>{item.title}</div>
            ))}
        </div>
    );
};

export default ReactQuery;
