import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use( express.static( "views" ) );
app.use(express.urlencoded({extended : false}));

app.set('view engine','ejs')

//create produk
app.get('/',(req,res) =>{
    res.render('index');
});


app.listen(3000,() => {
    console.log(`Server running at 127.0.0.1:3000`);
});