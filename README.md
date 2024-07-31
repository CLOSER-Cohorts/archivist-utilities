# archivist-utilities

This is a tool that implements the functionality described at https://ucldata.atlassian.net/wiki/spaces/CLOS/pages/37323492/Using+Txt+Files

The tool is accessible at https://closer-cohorts.github.io/archivist-utilities/

It accepts as input an Excel file (.xlsx)

The worksheet containing data from which the qv, tv and tq mappings are created MUST be the first worksheet in the file. This worksheet can have any name.

The worksheet containing data from which the dv mappings are created MUST be the second worksheet in the file. This worksheet can have any name.

## QV mappings file

The following column headers must be present in the first worksheet in the input Excel file, in order to create the qv text files:

 - Questionnaire prefix
 - Question name
 - Dataset prefix
 - Variable name

The headers are not case sensitive, i.e. a column called 'question name' instead of 'Question Name' is acceptable.

A separate qv text file will be created for each unique questionnaire prefix value in the first worksheet in the input Excel file.

For example, if some rows in the input worksheet had the value 'heaf_17_fup4' for the 'Questionnaire prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_qv.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Questionnaire prefix' column)
 - heaf_17_fup5_qv.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Questionnaire prefix' column)

## TV mappings file

The following column headers must be present in the first worksheet in the input Excel file, in order to create the tv text files:

 - Dataset prefix
 - Variable name
 - Topic id

The headers are not case sensitive, i.e. a column called 'dataset prefix' instead of 'Dataset Prefix' is acceptable.

A separate tv text file will be created for each unique dataset prefix value in the input Excel file.

For example, if some rows in the input worksheet had the value 'heaf_17_fup4' for the 'Dataset prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_tv.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Dataset prefix' column)
 - heaf_17_fup5_tv.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Dataset prefix' column)
 
## TQ mappings file

The following column headers must be present in the first worksheet in the input Excel file, in order to create the tq text files:

 - Questionnaire prefix
 - Question name
 - Topic id

The headers are not case sensitive, i.e. a column called 'question name' instead of 'Question Name' is acceptable.

A separate tq text file will be created for each unique questionnaire prefix value in the input Excel file.

For example, if some rows in the input worksheet had the value 'heaf_17_fup4' for the 'Questionnaire prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_tq.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Questionnaire prefix' column)
 - heaf_17_fup5_tq.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Questionnaire prefix' column)
 
## DV mappings file

The following column headers must be present in the first worksheet in the input Excel file, in order to create the dv text files:

 - Dataset prefix
 - Derived variable name
 - Source variable name

The headers are not case sensitive, i.e. a column called 'dataset prefix' instead of 'Dataset Prefix' is acceptable.

A separate dv text file will be created for each unique dataset prefix value in the input Excel file.

For example, if some rows in the input worksheet had the value 'heaf_17_fup4' for the 'Dataset prefix' column, and some other rows had the value 'heaf_17_fup5' for that column, this would result in 2 text files being generated: 
 
 - heaf_17_fup4_dv.txt (containing all the rows which had the value 'heaf_17_fup4' in the 'Dataset prefix' column)
 - heaf_17_fup5_dv.txt (containing all the rows which had the value 'heaf_17_fup5' in the 'Dataset prefix' column)
          
## Text mapping file generation

To generate the text mapping files for Archivist from an Excel XLSX file, simply:

1. Select the Excel XLSX file from your local computer by pressing the 'Choose file' button
2. A 'Convert file' button will appear after you have selected an XLSX file. Press this button.
3. Links to the various text files generated from this XLSX file will now displayed on the screen, and clicking on these will download the text files to your local computer.