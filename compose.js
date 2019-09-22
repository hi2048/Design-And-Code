const compose = (arr) => {
    return arr.reduce((a, b) => (...args) => a(b(...args)))
}
