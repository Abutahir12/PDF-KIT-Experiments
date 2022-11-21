const PDFDocument  = require("pdfkit");
const fs = require("fs");
const { formAnnotation } = require("pdfkit");

const doc = new PDFDocument();
const res = doc.pipe(fs.createWriteStream('sample.pdf')); // write to PDF
// doc.pipe(res);                                       // HTTP response

doc.font('Helvetica'); // establishes the default font
doc.initForm();

let rootField = doc.formField('rootField');
// let child1Field = doc.formField('child1Field', { parent: rootField });
// let child2Field = doc.formField('child2Field', { parent: rootField });

doc.formText("Name", 40,40,400,40, {parent:rootField});
doc.formText("Event Name", 40,100,400,40, {
    parent: rootField
});
// Add text form annotation 'rootField.child1Field.leaf1'
// doc.formText('Name', 40, 40, 400, 40, {
//     parent: child1Field
// });
// Add text form annotation 'rootField.child1Field.leaf2'
// doc.formText('tahir2', 10, 60, 200, 40, {
//   parent: child1Field,
//   multiline: true
// });
// Add text form annotation 'rootField.child2Field.leaf1'
// doc.formText('leaf1', 10, 110, 200, 80, {
//   parent: child2Field,
//   multiline: true
// });

// Add push button form annotation 'btn1'
// var opts = {
//   backgroundColor: 'yellow',
//   label: 'Test Button'
// };
// doc.formPushButton('btn1', 10, 200, 100, 30, opts);

doc.end();

