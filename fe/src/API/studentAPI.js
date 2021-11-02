
import * as types from '../store/studentModule/types'
    export default function getListStudent(method, path, data) {
        let objFetch = {}
        if(method === types.HTTP_READ || method === types.HTTP_DELETE){
            objFetch = {
                method
              }
        }else{
            objFetch = {
                method,
                headers: types.HTTP_HEADER_JSON,
                body: JSON.stringify(data)
              }
        }
        return new Promise((resolve, reject) => {
            const url = types.DOMAIN + path
            fetch(url, objFetch)
                .then((response) => resolve(response.json()))
                .catch((error) => reject(error));
        });
    }
    
    
