const express = require('express');
const app = express();
const port = 3000;
const exphbs  = require('express-handlebars');


app.engine('handlebars', exphbs(
    {
        defaultLayout: 'main'
    }
));
app.set('view engine', 'handlebars');

app.get('/' , (req , res)=>{
    var taches = [
        'tache 1',
        'tache 2',
        'tache 3'
    ]
    res.render('index' , {
        taches : taches
    }) ;
} );

app.listen( port , ()=>{
        console.log(` Server running on port ${port} `);
    });
