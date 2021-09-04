const file = 'test.jpg'

const extension = file.split('.').pop()
console.log(extension)

const filename = file.split('.').shift()
console.log(filename)