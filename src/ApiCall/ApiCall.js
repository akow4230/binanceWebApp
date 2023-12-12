
import axios from "axios";

export default function (url, method, data, param, header) {
    const baseUrl = 'http://localhost:8080';
    let token = localStorage.getItem("access_token");
    return axios({
        url: baseUrl + url,
        method: method,
        data: data,
        headers: {
            "Authorization": token,
            ...(header ? {"Content-Type": "multipart/form-data"} : {})
        },
        params: param
    }).then((res) => {
        if (res.data) {
            return {
                error: false,
                data: res.data
            };
        }
    }).catch((err) => {
        // Handle errors
    });
}
