'use strict';


/**
 * Find dataset by Accessions
 * Find the datasets by Datasets by Accessions
 *
 * accession List Accession values that need to be considered for filter
 * returns List
 **/
exports.findByAccession = function(accession) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Datasets by Attributes
 * Find datasets by keywords on any of the attributes of a dataset
 *
 * keyword String keyword to query all the attributes of a dataset
 * returns List
 **/
exports.findByAttributes = function(keyword) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find the dataset by the accession
 * Returns a single dataset by dataset Accession
 *
 * datasetAccession String Accession of the Dataset return
 * returns Dataset
 **/
exports.getDatasetByAccession = function(datasetAccession) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the proteins at the level of Dataset
 * Returns all the proteins reported at the level of Dataset
 *
 * datasetAccession String Accession of the Dataset to return proteins
 * returns Protein
 **/
exports.getProteinsByDatasetAccession = function(datasetAccession) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

