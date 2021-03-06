import React, { useState } from "react"
import Resume from "../docs/resume.pdf"
import styled from "styled-components"
import { Document, Page } from "react-pdf"
import { pdfjs } from "react-pdf"
import ControlPanelResume from "../components/ControlPanelResume"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
// import Layout from "../components/layout"

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`

const StyledParagraph = styled.p`
  font-family: "Montserrat", sans-serif;
`

const SecondPage = () => {
  const [scale, setScale] = useState(1)

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <Wraper>
      <ControlPanelResume scale={scale} setScale={setScale} />
      <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={scale} pageNumber={pageNumber} />
      </Document>
      <StyledParagraph>
        Page {pageNumber} of {numPages}
      </StyledParagraph>
    </Wraper>
  )
}

export default SecondPage
