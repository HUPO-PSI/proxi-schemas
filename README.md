# PROXI Schemas

The [HUPO-PSI Consortium](http://www.psidev.info/) defines community standards for data representation in
proteomics to facilitate data comparision, exchange and verification.

The **PRO**teome**X**change expression **I**nterface is a suite of integrated APIs each targeting a different aspect
of exchanging proteomics information between ProteomeXchange data partners and consumers.

## Structure of the Repository

- Schemas : Contains the **OpenAPI** definition of the Object schemas divided by categories:
  - dataset: ProteomeXhange **Dataset** definition including additional information such as **Contact**
  - common: Containing the Common data structures for the schemas such as **OntologyTerm**
  - biology: The biology folder contains data structure to identified molecules such as **Proteins**,  **Peptides**

### Install the swagger generation

```bash
> wget http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.3.1/swagger-codegen-cli-2.3.1.jar -O swagger-codegen-cli.jar
```




