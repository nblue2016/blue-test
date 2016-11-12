const Sequelize = require('sequelize')

const conn = new Sequelize('mysql://nblue:123456@localhost:3306/nblue')

conn.
  authenticate().
  then(() => {
    console.log('connected')
  }).
  catch((err) => {
    console.log('#err')
    console.log(err)
  })
