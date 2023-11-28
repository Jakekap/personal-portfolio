import downloadFile from '../../utils/downloadFile'
import { cvUrl } from '../../constants'
import { BiSolidDownload } from 'react-icons/bi'
import { css } from '@emotion/react'

const downloadButton = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  border: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  background-color: #464646;
  border: 2px dashed #464646;
  cursor: pointer;
  color: #fff;
  :hover {
    background-color: #fff;
    color: #464646;
  }
`
export default function DownloadButton() {
  return (
    <button
      onClick={() => downloadFile(cvUrl, 'CV_ChristianAndrade')}
      css={downloadButton}
    >
      <BiSolidDownload />
      DOWNLOAD RESUME
    </button>
  )
}
