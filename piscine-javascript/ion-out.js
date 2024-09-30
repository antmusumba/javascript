function ionOut(s){

    const words = s.split(/\s+/)
  
    const res = [];
  
    for(const word of words) {
      const regex = /t(?=ion)/;
      if (regex.test(word)){
          res.push(word.replace('ion', '').replace(/[^a-zA-Z]+$/, ''));
      }
    }
    return res
  }