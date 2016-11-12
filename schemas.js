const p = {
  name      : String,
  surname   : String,
  age2       : Number, // FLOAT
  male      : Boolean,
  continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
  photo     : Buffer, // BLOB/BINARY
  data      : Object // JSON encoded
}

Object.
  keys(p).
  forEach((key) => {
    const v = p[key]
    if (Array.isArray(v)){
      console.log('enum')
    } else if (typeof v === 'function') {
      console.log(p[key].name)
    }
  })

const a = (v) => {
  (() => {
    console.log(v.name)
  })()
}
a(String)
