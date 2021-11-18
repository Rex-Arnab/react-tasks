const checkNumber = (NUMBER) => {
    if (NUMBER % 2 == 0)
        return "foo"
    else if(NUMBER % 14 == 0)
        return "bar"
    else if (NUMBER % 7 == 0)
        return "foobar"
    else
        return NUMBER
}

console.log(checkNumber(Math.abs(process.argv[2])))