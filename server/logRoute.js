//This file logs any request that gets made

const logRoute = (req, res, next) => {

    //log whatever request details are made 
    console.log(req.method, req.originalUrl);
    next();
}

module.exports = logRoute;

