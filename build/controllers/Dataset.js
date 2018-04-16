'use strict';

var utils = require('../utils/writer.js');
var Dataset = require('../service/DatasetService');

module.exports.findByAccession = function findByAccession (req, res, next) {
  var accession = req.swagger.params['accession'].value;
  Dataset.findByAccession(accession)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findByAttributes = function findByAttributes (req, res, next) {
  var keyword = req.swagger.params['keyword'].value;
  Dataset.findByAttributes(keyword)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDatasetByAccession = function getDatasetByAccession (req, res, next) {
  var datasetAccession = req.swagger.params['datasetAccession'].value;
  Dataset.getDatasetByAccession(datasetAccession)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProteinsByDatasetAccession = function getProteinsByDatasetAccession (req, res, next) {
  var datasetAccession = req.swagger.params['datasetAccession'].value;
  Dataset.getProteinsByDatasetAccession(datasetAccession)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
