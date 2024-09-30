function groupPrice(dataSet) {
    const pricePattern = /USD(\d+)\.(\d{2})/g;
    let match;
    const result = [];

    while ((match = pricePattern.exec(dataSet)) !== null) {
        result.push([match[0], match[1], match[2]]);
    }

    return result;
}