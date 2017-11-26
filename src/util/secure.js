

export default (fn) => {
    return typeof fn === 'function' ? fn: () => {}
}