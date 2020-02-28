class Formatter {
  static capitalize(input){
    return input[0].toUpperCase() + input.slice(1)
  }

  static sanitize(input){
    return input.replace( /[^A-Za-z0-9 ']/g, "")
  }

  static titleize(input){

  }
}