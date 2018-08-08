import axios from "axios";
export const Api = {
    fetchRecords() {
        return axios({
            method: "get",
            url: process.env.REACT_APP_FETCH_RECORDS_URL,
        });
    }
};