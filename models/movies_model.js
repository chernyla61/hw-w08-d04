const pg = require('pg-promise')({/*config*/});

const config = {
  host:      process.env.DB_HOST,
  port:      process.env.DB_PORT,
  database:  process.env.DB_DATABASE,
  user:      process.env.DB_USER,
  password:  process.env.DB_PASSWORD,
  ssl:       process.env.DB_SSL
};

const db = pg(config);

module.exports = {

  getMovies(req, res, next) {
    
        let filter = '';
        if(req.params.id){
            filter = ' where id = ' + req.params.id;   
        }

        db.query('SELECT * FROM moviemix' + filter)
          .then((arrRecords) => {
            res.returnRecords = arrRecords;
            next();
          })
          .catch(error => next(error));
          return false;
  },

    updateMovie(req, res, next) {
    
          let filter = " where id = " + req.params.id; 
          let notes = req.params.notes;  


          db.query("UPDATE moviemix SET notes = '" + notes + "'" + filter)
            .then((arrRecords) => {
              res.returnRecords = arrRecords;
              next();
            })
            .catch(error => next(error));
            return false;
  },

    deleteMovie(req, res, next) {
    
          let filter = " where id = " + req.params.id; 
          let notes = req.params.notes;  


          db.query("DELETE FROM moviemix" + filter)
            .then((arrRecords) => {
              res.returnRecords = arrRecords;
              next();
            })
            .catch(error => next(error));
            return false;
  },

    insertMovie(req, res, next) {
    
          let fields = " (title, year, rated, poster, notes) ";
          let values = " ('" + req.params.title
                      + "', '"  + req.params.year
                      + "', '"  + req.params.rated
                      + "', '"  + req.params.poster
                      + "', '"  + req.params.notes 
                      + "')"


          db.query("INSERT INTO moviemix" + fields + "VALUES" + values)
            .then((arrRecords) => {
              res.returnRecords = arrRecords;
              next();
            })
            .catch(error => next(error));
            return false;
        }


};
