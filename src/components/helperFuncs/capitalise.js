function capitalize(str) {
    return str.replace(/\b\w/g, function(l) { return l.toUpperCase() })
  }

  export default capitalize;