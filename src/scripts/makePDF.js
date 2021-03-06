const pdfFillForm = require('pdf-fill-form');
const path = require('path');
const fs = require('fs');
const { genData } = require("./data");

const templateFile = path.resolve(__dirname, 'F245-127-000.pdf');
const outputFile = "test123.pdf";

const writeFile = templateFields => {
    pdfFillForm.write(
        templateFile,
        genData( templateFields ),
        { "save": "pdf" }
    )
    .then( result => {
        fs.writeFile( outputFile, result, err => {
            if(err) {
                return console.log( err );
            }
            console.log( "The file was saved!" );
        }); 
    }, err => {
        console.log( err );
    });
};

pdfFillForm.read(templateFile)
    .then( result => {
        writeFile( result )
    }, err => {
        console.log( err );
    });
