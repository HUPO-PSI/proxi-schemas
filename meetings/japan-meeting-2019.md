Meeting in Japan (07/2019)
==========================

Topics to be discuss: 

Spectra endpoint: 
---------------------

Key questions:
    - Should /spectra be able to return several spectra or one spectrum only?
    - Should we have /spectrum and /spectra for the distinction?

How are these two different?

- /spectra/{usi}
    - This returns actual spectra (or perhaps one spectrum)

- /psms/{usi}
    - This returns a list of one or more USIs?
       For example, what if there is some potential ambiguity in a USI?

 - /psms?peptideSequence=VLHPLEGAVVIIFK&charge=2

Do we want:
 - /spectra?peptideSequence=VLHPLEGAVVIIFK&charge=2


E.g., given:
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09:scan:17555:VLHPLEGAVVIIFK/2
A PROXI server might want to offer:
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09.raw:scan:17555:VLHPLEGAVVIIFK/2
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09.mzML:scan:17555:VLHPLEGAVVIIFK/2
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09.mzXML:scan:17555:VLHPLEGAVVIIFK/2

Or given:
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09:scan:17555
A PROXI server might want to offer:
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09:scan:17555
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09:scan:17555:VLHPLEGAVVIIFK/2
mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09:scan:17555:MVC[Carbamidomethyl]SPVTVR/2


- How to encode identification information into Spectrum object. 

  For now the ion annotations should be provided, but what happen if those annotations are not provided. 
  Please see example from PRIDE database API   
  (https://wwwdev.ebi.ac.uk/pride/ws/archive/spectra/mzspec:PXD014142:GPM00500045192.mzid_GPM00500045192.MGF:index:6109) 
  
Peptide / Protein endpoint 
-------------------

Endpoints for protein and peptide identifications including PTMs. Interesting use cases for Uniprot and NextProt/ 

- Quality Scores of Peptide and Protein identifications and PTMS. 

Quantitification endpoint
---------------------------

- Quantitative information. 

  
