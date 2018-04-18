# PROXI Dataset

The dataset object provides information about a proteomics study/dataset/project following
the ProteomeXchange standards.

The current (_v3_) implementation of ProteomeXchange projects has defined the following fields

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ProteomeXchangeDataset id="PXD008955" formatVersion="1.3.0" xsi:noNamespaceSchemaLocation="proteomeXchange-1.3.0.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <CvList>
        <Cv fullName="PSI-MS" uri="https://raw.githubusercontent.com/HUPO-PSI/psi-ms-CV/master/psi-ms.obo" id="MS"/>
        <Cv fullName="PRIDE" uri="https://raw.githubusercontent.com/PRIDE-Utilities/pride-ontology/master/pride_cv.obo" id="PRIDE"/>
        <Cv fullName="PSI-MOD" uri="https://raw.githubusercontent.com/MICommunity/psidev/master/psi/mod/data/PSI-MOD.obo" id="MOD"/>
        <Cv fullName="UNIMOD" uri="http://www.unimod.org/obo/unimod.obo" id="UNIMOD"/>
    </CvList>
    <DatasetSummary announceDate="2018-04-18" hostingRepository="PRIDE" title="Protein quality control by MARCH6/TRC8">
        <Description>Forward genetic screens in human cells we find that the proteasome-mediated degradation of the soluble misfolded reporter, mCherry-CL1, involves two ER-resident E3 ligases, MARCH6 and TRC8. To identify a more physiological correlate we used quantitative mass spectrometry and found that TRC8 and MARCH6 depletion altered the turnover of the tail-anchored protein Heme-Oxygenase-1 (HO-1).</Description>
        <ReviewLevel>
            <cvParam cvRef="PRIDE" accession="PRIDE:0000414" name="Peer-reviewed dataset"/>
        </ReviewLevel>
        <RepositorySupport>
            <cvParam cvRef="PRIDE" accession="PRIDE:0000417" name="Unsupported dataset by repository"/>
        </RepositorySupport>
    </DatasetSummary>
    <DatasetIdentifierList>
        <DatasetIdentifier>
            <cvParam cvRef="MS" accession="MS:1001919" name="ProteomeXchange accession number" value="PXD008955"/>
        </DatasetIdentifier>
    </DatasetIdentifierList>
    <DatasetOriginList>
        <DatasetOrigin>
            <cvParam cvRef="PRIDE" accession="PRIDE:0000402" name="Original data"/>
        </DatasetOrigin>
    </DatasetOriginList>
    <SpeciesList>
        <Species>
            <cvParam cvRef="MS" accession="MS:1001469" name="taxonomy: scientific name" value="Homo sapiens (Human)"/>
            <cvParam cvRef="MS" accession="MS:1001467" name="taxonomy: NCBI TaxID" value="9606"/>
        </Species>
    </SpeciesList>
    <InstrumentList>
        <Instrument id="Instrument_1">
            <cvParam cvRef="MS" accession="MS:1002416" name="Orbitrap Fusion"/>
        </Instrument>
    </InstrumentList>
    <ModificationList>
        <cvParam cvRef="MOD" accession="MOD:00425" name="monohydroxylated residue"/>
        <cvParam cvRef="MOD" accession="MOD:00397" name="iodoacetamide derivatized residue"/>
    </ModificationList>
    <ContactList>
        <Contact id="project_submitter">
            <cvParam cvRef="MS" accession="MS:1000586" name="contact name" value="James Williamson"/>
            <cvParam cvRef="MS" accession="MS:1000589" name="contact email" value="jcw76@cam.ac.uk"/>
            <cvParam cvRef="MS" accession="MS:1000590" name="contact affiliation" value="University of Cambridge"/>
            <cvParam cvRef="MS" accession="MS:1002037" name="dataset submitter"/>
        </Contact>
        <Contact id="project_lab_head">
            <cvParam cvRef="MS" accession="MS:1002332" name="lab head"/>
            <cvParam cvRef="MS" accession="MS:1000586" name="contact name" value="James Nathan"/>
            <cvParam cvRef="MS" accession="MS:1000589" name="contact email" value="jan33@cam.ac.uk"/>
            <cvParam cvRef="MS" accession="MS:1000590" name="contact affiliation" value="Cambridge Institute for Medical Research,  Department of Medicine,  University of Cambridge,  Cambridge,  CB2 0XY,  UK"/>
        </Contact>
    </ContactList>
    <PublicationList>
        <Publication id="PMID29519897">
            <cvParam cvRef="MS" accession="MS:1000879" name="PubMed identifier" value="29519897"/>
            <cvParam cvRef="PRIDE" accession="PRIDE:0000400" name="Reference" value="Stefanovic-Barrett S, Dickson AS, Burr SP, Williamson JC, Lobb IT, van den Boomen DJ, Lehner PJ, Nathan JA. MARCH6 and TRC8 facilitate the quality control of cytosolic and tail-anchored proteins. EMBO Rep. 2018"/>
        </Publication>
    </PublicationList>
    <KeywordList>
        <cvParam cvRef="MS" accession="MS:1001925" name="submitter keyword" value="Protein quality control, MARCH6, TRC8, Intramembrane proteolysis, ERAD"/>
        <cvParam cvRef="MS" accession="MS:1001926" name="curator keyword" value="Biological"/>
    </KeywordList>
    <FullDatasetLinkList>
        <FullDatasetLink>
            <cvParam cvRef="PRIDE" accession="PRIDE:0000411" name="Dataset FTP location" value="ftp://ftp.pride.ebi.ac.uk/pride/data/archive/2018/04/PXD008955"/>
        </FullDatasetLink>
        <FullDatasetLink>
            <cvParam cvRef="MS" accession="MS:1001930" name="PRIDE project URI" value="http://www.ebi.ac.uk/pride/archive/projects/PXD008955"/>
        </FullDatasetLink>
    </FullDatasetLinkList>
    <DatasetFileList>
        <DatasetFile id="FILE_0" name="JN-SSB_Knockouts_TMT10_20pc_F1.raw">
            <cvParam cvRef="PRIDE" accession="PRIDE:0000404" name="Associated raw file URI" value="ftp://ftp.pride.ebi.ac.uk/pride/data/archive/2018/04/PXD008955/JN-SSB_Knockouts_TMT10_20pc_F1.raw"/>
        </DatasetFile>
        <DatasetFile id="FILE_1" name="JN-SSB_Knockouts_TMT10_20pc_F10.raw">
            <cvParam cvRef="PRIDE" accession="PRIDE:0000404" name="Associated raw file URI" value="ftp://ftp.pride.ebi.ac.uk/pride/data/archive/2018/04/PXD008955/JN-SSB_Knockouts_TMT10_20pc_F10.raw"/>
        </DatasetFile>
    </DatasetFileList>
    <RepositoryRecordList>
        <RepositoryRecord name="Protein quality control by MARCH6/TRC8" label="PRIDE project" recordID="PXD008955" repositoryID="PRIDE" uri="http://www.ebi.ac.uk/pride/archive/projects/PXD008955"/>
    </RepositoryRecordList>
</ProteomeXchangeDataset>
```

