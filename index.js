class Formatter {
  static capitalize(input){
    return input[0].toUpperCase() + input.slice(1)
  }

  static sanitize(input){
    return input.replace( /[^\w\d\s\-']/g, "")
  }

  static titleize(input){
    let banned = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let split_arr = input.split(" ")
    split_arr[0] = split_arr[0][0].toUpperCase() + split_arr[0].slice(1)
    for(let i = 1; split_arr.length > i; i++){
      if(banned.includes(split_arr[i])){continue}
      split_arr[i] = split_arr[i][0].toUpperCase() + split_arr[i].slice(1)
    }
    return split_arr.join(" ")
  }
}