'use strict';


/**
 * Returns the protein by protein Accession
 * Returns a protein by a protein accession
 *
 * proteinAccession String Accession of the Dataset return
 * returns Map
 **/
exports.getProteinByAccession = function(proteinAccession) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

