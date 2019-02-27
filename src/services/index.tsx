import axios from "axios";
export const Api = {
    fetchRecords() {
        return axios({
            method: "get",
            url: process.env.REACT_APP_FETCH_RECORDS_URL,
        });
    },
    createRecords(data:any) {
        return axios({
            method: "post",
            data:data,
            url: process.env.REACT_APP_CREATE_RECORDS_URL,
        });
    }
};
