const buildRequireContextFromObject = object => {
    return path => {
      const componentName = path.substr(2) // exclude beginning "./" on string
      return object[componentName]
    }
  }
  
export default buildRequireContextFromObject;