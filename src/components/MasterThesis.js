import React from 'react';

//components
import Header from './Header';
import PDFReader from './PDFReader'

import MasterThesisPdf from '../pdfFiles/DTU_Thesis.pdf'

const MasterThesis = () => {

  return (
    <>
      <Header />
      <PDFReader PDF={MasterThesisPdf}/>
    </>
  )
}

export default MasterThesis;
