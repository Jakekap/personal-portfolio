import Divider from '../components/Divider'
import Typography from '../components/Typography'
import { aboutMeData } from '../constants/aboutMeData'
import styled from '@emotion/styled'
import DownloadButton from '../components/DownloadCV'

const PhotoShape = styled.div`
  aspect-ratio: 1/1;
  width: 500px;
  border-radius: 50%;
  min-width: 300px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(255, 185, 95, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  @media only screen and (max-width: 1100px) {
    width: 90%;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProfileContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    text-align: center;
    align-items: center;
  }
`

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function AboutMe() {
  return (
    <div className='aboutContainer'>
      <ProfileContainer>
        <PhotoContainer>
          <PhotoShape>
            <Photo src={aboutMeData.photo} alt='profile' />
          </PhotoShape>
        </PhotoContainer>
        <TitleContainer>
          <Typography
            main
            size='6rem'
            weight={700}
            font='ArchivoBlack, Akshar, san-serif'
            margin='2rem 0'
          >
            {aboutMeData.name}
          </Typography>
          <Typography header size='2.2rem' weight={700}>
            {aboutMeData.profession}
          </Typography>
          <Divider />
          <DownloadButton />
        </TitleContainer>
      </ProfileContainer>
    </div>
  )
}
