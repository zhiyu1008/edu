function uniToPromise(method = 'request', options = {}) {
  return new Promise((resolve, reject) => {
    options.success = resolve
    options.fail = error => {
      reject(error)
    }
    uni[method](options)
  })
}
export default uniToPromise