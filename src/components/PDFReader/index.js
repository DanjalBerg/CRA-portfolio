import React, { useState } from 'react';

//import { Document, Page } from 'react-pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import { Wrapper, Content } from './PDFReader.styles'

const PDFReader = ({PDF}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSucess = ({numPages}) => {
    console.log(numPages)
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset) => (
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  )

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <Wrapper>
      <Content>
        <Document
          file={PDF}
          onLoadSuccess={onDocumentLoadSucess}
          >
          <Page pageNumber={pageNumber} />
        </Document>

        <div className="buttonContainer">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </Content>
    </Wrapper>
  )
}

export default PDFReader
