import { giphyApi, searchApi1, searchApi2 } from '../definitions/api'

export const manager = {
    trendingGiphys,
    getSearchedGiphys,
}

function trendingGiphys() {
    return new Promise((resolve, reject) => {
        fetch(giphyApi)
            .then((response) => {
                const jsonRes = response.json();
                return jsonRes;
            }).then((data) => {
            const gifData = data.data
            console.log(data);
            resolve(gifData)
        })
            .catch((e) => {
                console.log("ee",e)
            })
    })
}

function getSearchedGiphys(key) {
    return new Promise((resolve, reject) => {
        const final_Search_url = searchApi1 + key + searchApi2
        fetch(final_Search_url)
            .then((response) => {
                const jsonRes = response.json();
                return jsonRes;
            }).then((data) => {
            const gifData = data.data
            console.log("searchData", data);
            resolve(gifData)
        })
    })
}