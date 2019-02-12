const express = require('express');
const app = express();
const port = 3000;

//=================================
//             BODY PARSER
//=================================

var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
//=================================
//             Handlebars
//=================================
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs(
    {
        defaultLayout: 'main'
    }
));
app.set('view engine', 'handlebars');

//=================================
//    Page d'accueil
//=================================
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

//=================================
//    Traitement du formulaire
//=================================
app.get('/add' , (req , res)=>{
    res.render('add') ;
} );

app.post('/add', (req, res)=> {
    console.log(req.body)

})


//=================================
//    Lancement du serveur
//=================================
app.listen( port , ()=>{
        console.log(` Server running on port ${port} `);
    });
