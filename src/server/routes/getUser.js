module.exports = function(app) {
    app.get("/", function(req, res, next) {
        // this is where will grab users from our database; 
        res.send(["annie", "mike", "tom"]);
        
    }); 
}