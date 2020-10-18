module.exports = function(app) {
    app.get("/", function(req, res, next) {
        // this is where will grab users from our database;
        // res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com"); 
        res.send(["annie", "mike", "tom"]);
        
    }); 
}