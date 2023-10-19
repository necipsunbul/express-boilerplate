export default () => {
    return process.env.NODE_ENV === 'production' ? '/dist' : '/src'
}