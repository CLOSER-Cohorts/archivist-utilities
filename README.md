# archivist-utilities

This is a tool that implements the functionality described at https://wiki.ucl.ac.uk/display/CTTEAM/Mappings, where there is also a link to the Excel template to use. 

The tool is accessible at https://closer-cohorts.github.io/archivist-utilities/

It accepts as input an Excel file (.xlsx)

The input files MUST:

- contain a worksheet titled 'QV and TV Mappings'
- contain a worksheet titled 'DV'

The 'QV and TV Mappings' worksheet contains data from which the qv, tv and tq mappings are created.

The 'DV' worksheet contains data from which the dv mappings are created.

The titles of these worksheets are not case-sensitive, i.e. 'qv and tv Mappings', 'QV AND TV MAPPINGS', 'dv', 'Dv', etc. are all valid titles.

The position of these worksheets in the sequence of available worksheets is not important; the application code selects worksheets by their title, not by their position in the spreadsheet.

The 'QV and TV Mappings' worksheet MUST contain column headings with the following titles:

- Questionnaire prefix
- Question name
- Dataset prefix
- Variable name
- Topic id

The 'DV' worksheet MUST contain column headings with the following titles:

- Derived Dataset prefix
- Derived Variable Name
- Source Dataset prefix
- Source Variable Name

When generating mapping files from the input spreadsheet, if a worksheet row contains insufficient information, i.e. it doesn't contain values in all required cells, that row will not be used in the creation of the mapping file. The columns required for each type of mapping file are listed below.

Any rows with cells containing 'NA' or 'Derived' (not case-sensitive), or cells that are empty or only contain whitespace, will not be present in the output, as they do not contain sufficient information.

## QV mappings file

The following column headers must be present in the 'QV and TV Mappings' worksheet in the input Excel file, in order to create the qv text files:

 - Questionnaire prefix
 - Question name
 - Dataset prefix
 - Variable name

The headers are not case sensitive, i.e. a column called 'question name' instead of 'Question Name' is acceptable.

A separate qv text file will be created for each unique questionnaire prefix value in the 'QV and TV Mappings' worksheet in the input Excel file. The questionnaire prefix will automatically have _ccs01 suffixed. 

For example, if some rows in the input worksheet had the value 'heaf_17_fup4' for the 'Questionnaire prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_qv.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Questionnaire prefix' column)
 - heaf_17_fup5_qv.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Questionnaire prefix' column)

## TV mappings file

The following column headers must be present in the 'QV and TV Mappings' worksheet in the input Excel file, in order to create the tv text files:

 - Dataset prefix
 - Variable name
 - Topic id

The headers are not case sensitive, i.e. a column called 'dataset prefix' instead of 'Dataset Prefix' is acceptable.

A separate tv text file will be created for each unique dataset prefix value in the 'QV and TV Mappings' worksheet in the input Excel file.

For example, if some rows in the input worksheet had the value 'heaf_17_fup4' for the 'Dataset prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_tv.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Dataset prefix' column)
 - heaf_17_fup5_tv.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Dataset prefix' column)
 
## TQ mappings file

The following column headers must be present in the 'QV and TV Mappings' worksheet in the input Excel file, in order to create the tq text files:

 - Questionnaire prefix
 - Question name
 - Topic id

The headers are not case sensitive, i.e. a column called 'question name' instead of 'Question Name' is acceptable. For rows which have the same topic ID but different grid cells (e.g. qc_1$1;1), all but one will be removed and this will have the suffix removed (e.g. resulting in qc_1) to allow for loading into Archivist which only allows one topic per question. 

A separate tq text file will be created for each unique questionnaire prefix value in the input Excel file.
For example, if some rows in the input worksheet had the value 'heaf_17_fup4' for the 'Questionnaire prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_tq.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Questionnaire prefix' column)
 - heaf_17_fup5_tq.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Questionnaire prefix' column)
 
## DV mappings file

The following column headers must be present in the 'DV' worksheet in the input Excel file, in order to create the dv text files:

 - Derived Dataset prefix
 - Derived Variable Name
 - Source Dataset prefix
 - Source Variable Name

The headers are not case sensitive, i.e. a column called 'derived dataset prefix' instead of 'Derived Dataset prefix' is acceptable.

A separate dv text file will be created for each unique derived dataset prefix value in the 'DV' worksheet in the input Excel file.

For example, if some rows in the 'DV' worksheet had the value 'heaf_17_fup4' for the 'Derived Dataset prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_dv.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Derived Dataset prefix' column)
 - heaf_17_fup5_dv.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Derived Dataset prefix' column)
          
## Text mapping file generation

To generate the text mapping files for Archivist from an Excel XLSX file, simply:

1. Select the Excel XLSX file from your local computer by pressing the 'Choose file' button
2. A 'Convert file' button will appear after you have selected an XLSX file. Press this button.
3. Links to the various text files generated from this XLSX file will now displayed on the screen, and clicking on these will download the files to your local computer.
