// The content of this file was generated by IBM Cloud
// Do not modify it as it might get overridden
module.exports = function(app, server){

    require('./public')(app);
    require('./health')(app);
    require('./urls')(app);
    require('./tools')(app);
    require('./cluster')(app);
    require('./activation')(app);
};
