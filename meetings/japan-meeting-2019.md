Meeting in Japan (07/2019)
==========================

Add to all objects the source of the object
--------------------------
PRIDE 
MassIVE


Entry points
--------------------------

Convention:
~~~~~~~~~~~~~~~
Compact objects: Using only mandatory field (smaller)
Full objects: Including all fields.

Not all entry points will be able to be implemented by everyone.
Entry points that are not implemented, need to be documented properly. Find the right way to do it.

Implementation in ProteomeCentral:
Union of the results of all resources.
We need to know where it is originating resource.

Datasets
-------------------------------

/datasets/{id}
/datasets?<filterTerms>
Every query must return a list, even if of size zero or one
/datasets?species=homo sapiens&pageSize=50&pageNumber=1&resultType=compact

Filter options: 
~~~~~~~~~~~~~~~~~~~
accession=[PXD0000001, PXD000002]
species=
instrument=
contact=
publication=
modification=
keyword= (only from the Dataset Keywords field)
search=liver (i.e., free text search term)
protein= ?
peptide= ? 

Multiple values for attribute are query: 
/datasets?species=human;mouse	# decide which of these to use or what is conventional (Need to be decided)
/datasets?species=[human,mouse]



SPECTRA

/spectra/{usi}
This returns one actual spectrum
/spectra?<filterTerms>
Every query must return a list, even if of size zero or one

Spectrum should contain a STATUS field mandatory: [READABLE, PEAKS UNAVAILABLE]

What happens with queries that are very large?

/spectra?usi={}
Result is the requested spectrum annotated with the user-supplied peptide string
A resource may return an empty result if unable to generate the result object
In particular, if the resource can find the spectrum but not annotate the spectrum with the peptide string then the result should be an error code.
Proposal: If unable to resolve an ambiguous USI, a resource may return an error, as well as the set of (“precise”) USIs that result from the query:
/spectra?accession=PXD000&msRun=XXX&scan=2019&resultType=compact

PX accession 
msRun or fileName
Scan 

The only way the USI is a query is for msRun.

Always a list of spectrum objects is always returned. Every resource is responsible of the resolution of the list. 
Use “compact” and “full” objects.
Differentiate “I could not open” (raw files) from “empty”.


PSMs

Actual observations in the resource, not interpretations/hypotheses.

/psms?usi={} 
Shortcut

/psms?peptideSequence=VLHPLEGAVVIIFK&charge=2
Do we want:
/spectra?peptideSequence=VLHPLEGAVVIIFK&charge=2

passThreshold=true (“true” is the default value, can also be set to passThreshold=all)
PX accession 
MsRun 
Scan or index 
peptideSequence 
proteinAccession 
Charge 
Modification (use instead of PTM)
Will also need to specify massTolerance= +/- delta_mass_tolerance
peptidoForm

One PSM Object: 

peptideSequence 
USI (https://docs.google.com/document/d/1LLQwmttrXku2JBgWZvheXDKVbCb1AcGPVXd8FSSby00/edit#)
Modifications as represented by mzTab (Yasset)
Example: 9-UNIMOD:35,3-UNIMOD:7,15-UNIMOD:7
searchEngineScore: [
              OntologyTerms
         ]
retentionTime
charge
proteinAccessions: [
   [ProteinId, Start, End}
]

We have decided to enable queries by actual peptide sequence only. The only way to retrieve peptidoforms is by using mass tolerances.


PEPTIDE

/peptide?

Query filters:
passThreshold=true (“true” is the default value, can also be set to passThreshold=all)
PX accession
peptideSequence
proteinAccession
Modification (use instead of PTM)
Will also need to specify massTolerance= +/- delta_mass_tolerance
peptidoForm

One Peptide Object: 

peptideSequence
countPSM
Modifications
peptidoformSequence
countDatasets
countPeptidoforms
proteinAccessions: [
   [ProteinId, Start, End}
]
attributes: [     (Yasset Define name of this - the goal is to represent repository-scale aggregate FDR controls)
] 

 

PROTEINS

Query filters:
passThreshold=true (“true” is the default value, can also be set to passThreshold=all)
PX accession 
peptideSequence 
Modification (use instead of PTM)
Will also need to specify massTolerance= +/- delta_mass_tolerance
peptidoForm
Gene accession
ProteinAccession=[Acc1, Acc2, Acc3...]
Isoforms need to be explicitly listed as separate accessions

One Protein Object: 

countPeptides
countPSMs
Modifications
countDatasets
countPeptidoforms
attributes: [     (Yasset Define name of this - the goal is to represent repository-scale aggregate FDR controls)
] 





Aggregated level: 

Define the scores for every database: ProteinProphet , MassiVEKB Score. 


-----



ERROR CODE needs to be defined: 



