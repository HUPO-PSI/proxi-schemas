# PROXI Schemas

The [HUPO-PSI Consortium](http://www.psidev.info/) defines community standards for data representation in
proteomics to facilitate data comparision, exchange and verification.

The **Pro**teomics e**X**pression **I**nterface is a suite of integrated APIs each targeting a different aspect
of exchanging proteomics information between ProteomeXchange data partners and consumers.

Here, all the api running can be hit: http://proteomecentral.proteomexchange.org/PROXI.php

## Structure of the Repository

- meetings: Contains all the meeting discussions around the API.
- specs: Specifications folder including:
   - The swagger.yaml file contains the current definition of the API.
   - proxi-specifications.adoc : Ansible document definition, with examplesm, notations around the API.
   - proxi-specifications.pdf : PDF document definition, with examplesm, notations around the API.

# Current implementations

## PRIDE Repository

- Get dataset: http://wwwdev.ebi.ac.uk/pride/proxi/archive/datasets/PXD005011

- Search Datasets: http://wwwdev.ebi.ac.uk/pride/proxi/archive/datasets?pageSize=100&pageNumber=1&resultType=Full

## Massive Repository

- Get Dataset: http://ccms-internal.ucsd.edu/ProteoSAFe/proxi/datasets?resultType=full&accession=PXD000561

- Datasets by contact: http://ccms-internal.ucsd.edu/ProteoSAFe/proxi/datasets?resultType=compact&contact=Pandey&pageSize=1

- Datasets by publication: http://ccms-internal.ucsd.edu/ProteoSAFe/proxi/datasets?resultType=compact&publication=draft%20map&pageSize=1

- Datasets by species: http://ccms-internal.ucsd.edu/ProteoSAFe/proxi/datasets?resultType=compact&species=mus

- Search Datasets Mod (modification=iTRAQ): http://ccms-internal.ucsd.edu/ProteoSAFe/proxi/datasets?resultType=compact&modification=iTRAQ


## jPOST Repository

- List and search Datasets
  - https://repository.jpostdb.org/proxi/datasets
  - https://repository.jpostdb.org/proxi/datasets?resultType=full&pageSize=5
  - https://repository.jpostdb.org/proxi/datasets?contact=Ishihama
  - https://repository.jpostdb.org/proxi/datasets?species=rat
  - https://repository.jpostdb.org/proxi/datasets?species=rat,mus
  - https://repository.jpostdb.org/proxi/datasets?modification=iTRAQ
  - https://repository.jpostdb.org/proxi/datasets?instrument=Fusion
  - https://repository.jpostdb.org/proxi/datasets?publication=cancer
  - https://repository.jpostdb.org/proxi/datasets?accession=PXD005159
  - https://repository.jpostdb.org/proxi/datasets?accession=JPST000200
  - https://repository.jpostdb.org/proxi/datasets?search=colorectal

- Get Dataset
  - https://repository.jpostdb.org/proxi/datasets/JPST000200
  - https://repository.jpostdb.org/proxi/datasets/PXD005159

## Contributing

The ProXI API is an open source project, feel free to contribute following the [guidelines](CONTRIBUTING.rst)
