const orm = require('orm')

// const cs = 'mysql://nblue:123456@localhost:3306/nblue'
const cs = 'sqlite://nblue.sqlite'

orm.connect(cs, (err, db) => {
    if (err) {
      console.log('#err')
      console.log(err)

      return
    }

    console.log('connected')

    const Person = db.define("person", {
      name      : String,
      surname   : String,
      age       : Number, // FLOAT
      male      : Boolean,
      continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
      photo     : Buffer, // BLOB/BINARY
      data      : Object // JSON encoded
    }, {
      methods: {
        fullName: function () {
          return this.name + ' ' + this.surname;
        }
      },
      validations: {
        age: orm.enforce.ranges.number(18, undefined, "under-age")
      }
    })

    Person.sync((err) => {
      if (err) {
        console.log('#err2')
        console.log(err)

        return
      } else {
        console.log('created')

        db.close((err) => {
          if (err) {
            console.log('#err2')
            return
          }

          console.log('disconnected')
        })
      }
    })
  }
)
