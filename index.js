let pg = require('pg')
let client = new pg.Client(
    {
        user: 'postgres',
        password: 'quyen1995',
        database: 'csv',
        host: 'localhost',
        port: 5432
    }
)

client.connect()

// client.query('select * from dm_nv', function(err, results) 
// {
//     console.log(err, results.rows)
// })

//Copy tu https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => 
{
    client.query('select * from dm_nv', function(err, results) 
    {
        res.send(JSON.stringify(results.rows))
        client.end()
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))