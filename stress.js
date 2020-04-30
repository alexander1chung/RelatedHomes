import http from 'k6/http';
import { sleep, check } from 'k6';

// export let options = {
//     stages: [
//         { duration: '5m', target: 500 }, // below normal load
//         { duration: '5m', target: 800 },
//         { duration: '5m', target: 1200 }, // normal load
//         { duration: '5m', target: 800 }, // ease
//         // stop
//     ],
// };

export const options = {
    vus: 3000,
    duration: '60s',
};

const randomNum = () => Math.floor(Math.random() * 10000);

export default function () {
    const BASE_URL = 'http://ec2-18-144-29-67.us-west-1.compute.amazonaws.com'; // make sure this is not production

    // let responses = http.batch([
    //     [
    //         'GET',
    //         `${BASE_URL}/${randomNum()}`,
    //         null,
    //         { tags: { name: 'stage 1' } },
    //     ],
    // ]);
    let res = http.get(`${BASE_URL}/${randomNum()}`);
    check(res, {
        'status was 200': r => r.status == 200,
        'transaction time OK': r => r.timings.duration < 1000,
    });
    sleep(1);
    
}