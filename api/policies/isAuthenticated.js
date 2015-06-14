/**
 * isAuthenticated.js
 *
 * @description :: This policy redirects unAuthenticated users to the Login page
 * 
 */

module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
        return next();
    }
    else{
        return res.redirect('/login');
    }
};