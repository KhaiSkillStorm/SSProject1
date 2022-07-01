const logger = (req, res, next) => {
    // next is a function that invoking will cause the next middleware to execute
    if(req.method == 'GET'){
        console.log('Flights have been requested');
    }
    else if(req.method == 'POST'){
        console.log('Flights have been created');
    }
    else if(req.method == 'PUT'){
        console.log('Flights have been updated');
    }  else { }
    // console.log(req.method + ' Request received from ' + req.originalUrl);
    next(); // Without next(), the HTTP requests will hang
}

module.exports = logger;