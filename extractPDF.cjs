const fs = require("fs");
const { PDFParse } = require("pdf-parse");

const pdfPath =
  "c:\\Users\\enzod\\Portifolio\\src\\assets\\doc\\EnzoCurriculoPT.pdf";

let dataBuffer = fs.readFileSync(pdfPath);

const parser = new PDFParse({
  data: dataBuffer,
});

parser
  .getText()
  .then(function (result) {
    console.log(result.text);
  })
  .catch(function (error) {
    console.error("Erro ao ler PDF:", error);
  });
