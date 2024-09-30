function getURL(dataSet) {
    const urlPattern = /https?:\/\/[^\s]+/g;
    return dataSet.match(urlPattern) || [];
}

function greedyQuery(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const queryParams = (url.match(/[\?&][^?&]+=[^?&]+/g) || []).length;
        return queryParams >= 3;
    });
}

function notSoGreedy(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const queryParams = (url.match(/[\?&][^?&]+=[^?&]+/g) || []).length;
        return queryParams >= 2 && queryParams <= 3;
    });
}