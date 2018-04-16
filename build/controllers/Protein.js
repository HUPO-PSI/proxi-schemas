'use strict';

var utils = require('../utils/writer.js');
var Protein = require('../service/ProteinService');

module.exports.getProteinByAccession = function getProteinByAccession (req, res, next) {
  var proteinAccession = req.swagger.params['proteinAccession'].value;
  Protein.getProteinByAccession(proteinAccession)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
