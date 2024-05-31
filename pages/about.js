import { read, writeFileXLSX } from "xlsx";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";

// import fs from 'node:fs'

export default function About() {

  const [linkHref, setLinkHref] = useState("");
  const [linkHref2, setLinkHref2] = useState("");
  const [linkHref3, setLinkHref3] = useState("");
  const [linkHref4, setLinkHref4] = useState("");


  useEffect(() => {
    var formBlob2 = new Blob(["TESTING"], { type: 'text/plain' });
    console.log(formBlob2)
    const path = (window.URL.createObjectURL(formBlob2))
    // setLinkHref(path)
    //setLinkHref("://localhost:3000/favicon.ico")
  }, [])

  const uploadFile = async (event) => {
    const file = event.target.files[0];
    console.log(file)
    //const workbook = read(file);

    const reader = new FileReader();

    reader.onload = (function (event) {
      console.log("WE ARE HERE...")
     
      const wb = read(reader.result);
      
      const cellNames = Object.keys(wb['Sheets']['QV and TV Mappings'])
      const worksheetCells = wb['Sheets']['QV and TV Mappings']
      console.log(worksheetCells)
      const dataCells=cellNames.slice(9,cellNames.length-1)
      const numberOfVariables = (dataCells.length)/8
      console.log(dataCells)
      
      const cellNames2 = Object.keys(wb['Sheets']['DV'])
      const worksheetCells2 = wb['Sheets']['DV']
      console.log(worksheetCells2)
      const dataCells2=cellNames2.slice(7,cellNames2.length-2)
      const numberOfVariables2 = (dataCells2.length)/6
      console.log(dataCells2)
      
      var questionnairePrefix=[]
      const indexes = [...Array(numberOfVariables).keys().map(x => (x*8)+3)]
      // console.log(indexes)
      indexes.forEach(x => {  
        //console.log(dataCells[x]);
        const qvTxtColumn1 = worksheetCells[dataCells[x]]['v']+"_ccs01"
        //console.log(qvTxtColumn1)
        questionnairePrefix.push(qvTxtColumn1)
      }
      )

      var questionLabels=[]
      const indexes2 = [...Array(numberOfVariables).keys().map(x => (x*8)+4)]
      //console.log(indexes2)
      indexes2.forEach(x => {
      // console.log(worksheetCells[dataCells[x]]);
      //  if (!['NA', 'Derived'].includes(worksheetCells[dataCells[x]]['v']))
          {
          const qvTxtColumn2 = worksheetCells[dataCells[x]]['h']  
          // console.log(worksheetCells[dataCells[x]]['h'])
          questionLabels.push(qvTxtColumn2)
          }
      }
      )

      var datasetPrefixes=[]
      const indexes3 = [...Array(numberOfVariables).keys().map(x => (x*8))]
      //console.log(indexes3)
      indexes3.forEach(x => {
      //  if (!['NA', 'Derived'].includes(worksheetCells[dataCells[x]]['v']))
          {  
    //    console.log(worksheetCells[dataCells[x]]);
          const qvTxtColumn3 = worksheetCells[dataCells[x]]['v']
          datasetPrefixes.push(qvTxtColumn3)
  //      console.log(qvTxtColumn1)
          }
      }
      )

      var variableNames=[]
      const indexes4 = [...Array(numberOfVariables).keys().map(x => (x*8)+1)]
      //console.log(indexes4)
      
      indexes4.forEach(x => {
      //  if (!['NA', 'Derived'].includes(worksheetCells[dataCells[x]]['v']))
          {  
        console.log(worksheetCells[dataCells[x]]);
        console.log(dataCells[x])
          const qvTxtColumn4 = worksheetCells[dataCells[x]]['v']
          variableNames.push(qvTxtColumn4)
        //console.log(qvTxtColumn4)
          }
      }
      )

      var topicIds=[]
      const indexes5 = [...Array(numberOfVariables).keys().map(x => (x*8)+6)]
      //console.log(indexes5)
      indexes5.forEach(x => {
      //  if (!['NA', 'Derived'].includes(worksheetCells[dataCells[x]]['v']))
          {  
        console.log(worksheetCells[dataCells[x]]);
          const qvTxtColumn5 = worksheetCells[dataCells[x]]['v']
          topicIds.push(qvTxtColumn5)
       // console.log(qvTxtColumn5)
          }
      }
      )

      console.log(numberOfVariables2)

      var derivedVariableNames=[]
      const indexes6 = [...Array(numberOfVariables2).keys().map(x => (x*6)+1)]
      console.log(indexes6)
      indexes6.forEach(x => {
      //  if (!['NA', 'Derived'].includes(worksheetCells2[dataCells2[x]]['v']))
          {  
          console.log(worksheetCells2[dataCells2[x]]);
          const qvTxtColumn6 = worksheetCells2[dataCells2[x]]['v']
          derivedVariableNames.push(qvTxtColumn6)
        console.log(qvTxtColumn6)
          }
      }
      )

      var sourceVariableNames=[]
      const indexes7 = [...Array(numberOfVariables2).keys().map(x => (x*6)+4)]
      console.log(indexes7)
      indexes7.forEach(x => {  
      //  if (!['NA', 'Derived'].includes(worksheetCells2[dataCells2[x]]['v']))
          {
          console.log(worksheetCells2[dataCells2[x]]);
          const qvTxtColumn7 = worksheetCells2[dataCells2[x]]['v']
          sourceVariableNames.push(qvTxtColumn7)
        console.log(qvTxtColumn7)
          }
      }
      )

      var variableDatasetPrefixes=[]
      const indexes8 = [...Array(numberOfVariables2).keys().map(x => (x*6))]
      console.log(indexes8)
      indexes8.forEach(x => {  
      //  if (!['NA', 'Derived'].includes(worksheetCells2[dataCells2[x]]['v']))
          {
          console.log(worksheetCells2[dataCells2[x]]);
          const qvTxtColumn8 = worksheetCells2[dataCells2[x]]['v']
          variableDatasetPrefixes.push(qvTxtColumn8)
        console.log(qvTxtColumn8)
          }
      }
      )


      console.log(questionnairePrefix.length)
      console.log(questionLabels.length)
      console.log(datasetPrefixes.length)
      console.log(variableNames.length)
      console.log(topicIds.length)
      console.log(derivedVariableNames.length)
      console.log(sourceVariableNames.length)
      console.log(variableDatasetPrefixes.length)

      var file = ""
      for (let i = 0; i < questionnairePrefix.length; i++) {
        const fileEntry = [questionnairePrefix[i], 
        questionLabels[i], 
        datasetPrefixes[i],
        variableNames[i]]
        
        if (!(fileEntry.includes("NA") || fileEntry.includes("Derived")))
          file = file +fileEntry.join("\t") +"\n"
        
      }

      var formBlob = new Blob([file], { type: 'text/plain' });

      const link = window.URL.createObjectURL(formBlob);

      setLinkHref(link)

      var file2 = ""
      for (let i = 0; i < datasetPrefixes.length; i++) {
        const fileEntry = [datasetPrefixes[i], 
        variableNames[i], 
        topicIds[i]]
        
        if (!(fileEntry.includes("NA") || fileEntry.includes("Derived")))
          file2 = file2 +fileEntry.join("\t") +"\n"
        
      }

      var formBlob = new Blob([file2], { type: 'text/plain' });

      const link2 = window.URL.createObjectURL(formBlob);

      
     ///const path = (window.URL.createObjectURL(formBlob2))
    setLinkHref2(link2)
      
    var file3 = ""
    for (let i = 0; i < questionnairePrefix.length; i++) {
      const fileEntry = [questionnairePrefix[i], 
      questionLabels[i], 
      topicIds[i]]
      
      if (!(fileEntry.includes("NA") || fileEntry.includes("Derived")))
        file3 = file3 +fileEntry.join("\t") +"\n"
      
    }

    var formBlob = new Blob([file3], { type: 'text/plain' });

    const link3 = window.URL.createObjectURL(formBlob);

    
   ///const path = (window.URL.createObjectURL(formBlob2))
  setLinkHref3(link3)
    

  var file4 = ""
  for (let i = 0; i < variableDatasetPrefixes.length; i++) {
    const fileEntry = [variableDatasetPrefixes[i], 
    derivedVariableNames[i], 
    variableDatasetPrefixes[i],
    sourceVariableNames[i]
  ]
  
  if (!(fileEntry.includes("NA") || fileEntry.includes("Derived")))
    file4 = file4 +fileEntry.join("\t") +"\n"
  
  }

  var formBlob = new Blob([file4], { type: 'text/plain' });

  const link4 = window.URL.createObjectURL(formBlob);

  
 ///const path = (window.URL.createObjectURL(formBlob2))
setLinkHref4(link4)
  


     // console.log(wb['Sheets']['QV and TV Mappings'][indexes])
    });
    reader.readAsArrayBuffer(file)

  };

  const renderLink = (linkRef, filename, linkText) => {
    console.log(linkRef)
    return linkRef != "" ? <a href={linkRef} download={filename}>{linkText}</a> : null
  }
    
     // const linkHref = window.URL.createObjectURL(formBlob2);

    return <div style={{"font-size" : "20px", "padding" : "5px"}}><h1>Generate text mappings files</h1>
      <input id="input" type="file" onChange={uploadFile}/>
      <div style={{"padding" : "5px"}}>{renderLink(linkHref, "sample.txt", "qv.txt")}</div>
      <div style={{"padding" : "5px"}}>{renderLink(linkHref2, "sample2.txt", "tv.txt")}</div>
      <div style={{"padding" : "5px"}}>{renderLink(linkHref3, "sample3.txt", "tq.txt")}</div>
      <div style={{"padding" : "5px"}}>{renderLink(linkHref4, "sample4.txt", "dv.txt")}</div>
      </div>
  }