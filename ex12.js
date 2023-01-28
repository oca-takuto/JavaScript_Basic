test = ["a","b","c"]

test.forEach(element=>console.log(element))
test.forEach(el=>console.log(el))

new_test = test.map(e=>e+"1")
test

f_test = test.filter(e=>e.startsWith("a"))
f_test
