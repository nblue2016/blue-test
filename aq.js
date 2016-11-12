const aq = require('nblue').aq

/*
// promise a value
aq.
  then('test').
  then((data) => {
    console.log(data) // data is test
  })

// read an file
const path = require('path')
const file = path.join(__dirname, 'test.dat')

aq.
  readFile(file, { encoding: 'utf-8' }).
  then((data) => {
    console.log(data) // output file content
  })

// invoke rest method
aq.
  rest("http://127.0.0.1:8080/?key1=val1&key2=val2").
  then((data) => {
    console.log(data) // output the response body by web api
  }).
  catch((err) => {
    console.log(err) // output error message
  })

// package a value
aq.
  then(1).
  then((data) => {
    console.log(data) // output 1
  })

// package an error
aq.
  then(null, new Error('an error')).
  catch((err) => {
    console.log(err.message)  // output 'an error'
  })

// or use done() method
aq.
  done(new Error('an error')).
  catch((err) => {
    console.log(err.message)  // output 'an error'
  })
*/
const fs = require('fs')
const filename = 'data.txt'

aq.
  apply(fs, fs.readFile, [filename, 'utf-8']).
  then((data) => {
    console.log(data) // output file data
  }).
  catch((err) => {
    console.log(err)
  })

aq.
  call(fs, fs.readFile, filename, 'utf-8').
  then((data) => {
    console.log(data) // output file data.
  }).
  catch((err) => {
    console.log(err)  // output error message if read file failed
  })

aq.
  rest('http://127.0.0.1:8080/data/test.json').
  then((data) => {
    console.log(data)  // output {"key1":"data1", "key2":"data2"}
  })

// aq.rest() method also support to call complex rest services, the post data and result of rest service must use JSON format

const headers = {"token": "xcvsd23sfs23423"}
const body = {"a1":1, "a2":2}

aq.
  rest('http://127.0.0.1:8080/data/test2.json', 'POST', headers, body).
  then((data) => {
    console.log(data)  // output result
  })

aq.
  parallel([
    aq.then(1),
    aq.then(2),
    aq.then(3)
  ]).
  then((data) => {
    console.log(data)  // [1, 2, 3]
  })

// We can complex aq.rest and aq.parallel to batch process a few rest service.
aq.
  parallel([
    aq.rest('http://127.0.0.1:8080/data/test.json'),
    aq.rest('http://127.0.0.1:8080/data/test2.json')
  ]).
  then((data) => {
    // output [{data1}, {data2}]
    console.log(data)
  })
