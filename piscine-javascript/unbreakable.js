function split(str, separator) {
    var result = []
    let shaddy = ''
    if (separator === '') {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result
    }

    for (let i = 0; i <= str.length - 1; i++) {
        if ((str[i] === separator[0]) && !((i + separator.length) > str.length)){
            if (str.slice(i, separator.length+i) === separator) {
                result.push(shaddy)
                shaddy = ''
                i += separator.length-1
            }
        }else {
            shaddy += str[i]            
        }
        
    }
    result.push(shaddy)
  return result
}

function join(arr, str) {
    var result = ""
    for (var i = 0; i < arr.length - 1; i++) {
        result += arr[i] + str
    }
    result += arr[arr.length - 1]
    return result
}