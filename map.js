let data = [{ city: "New York" }, { city: "Los Angeles" }];
function cities(arr) {
    return arr.map((sampl)=> sampl.city)
}
console.log(cities(data))