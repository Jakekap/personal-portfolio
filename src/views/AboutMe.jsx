import Divider from '../components/Divider'
import Typography from '../components/Typography'
import styled from '@emotion/styled'
import DownloadButton from '../components/DownloadCV'
import SectionTitle from '../components/SectionTitle'
import { aboutMeData } from '../constants/aboutMeData'

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

const SkillContainer = styled.div`
  display: grid;
  margin-top: 1rem;
  gap: 0 2rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 150px);
  }
  grid-template-columns: repeat(2, 250px);
  grid-auto-rows: auto;
`
const SectionSkill = styled.div`
  display: flex;
  flex-direction: column;
`

const Skill = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
`

const SkillImg = styled.img`
  width: 35px;
  height: 35px;
`

const SkillsGroup = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    gap: 5rem 0;
  }
  gap: 5rem;
  margin-bottom: 5rem;
  flex-wrap: wrap;
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
      <SkillsGroup>
        <SectionSkill>
          <SectionTitle
            light
            customShape='shape11'
            customPadding={'1.2rem'}
            fontSize={3}
            title='HARD SKILLS'
            fontWeight={400}
          />
          <SkillContainer>
            {aboutMeData.hardSkills.skills.map((skill, index) => (
              <Skill key={index}>
                <SkillImg src={skill.icon} alt={skill.title} />
                <Typography size='1.6rem' weight={400}>
                  {skill.title}
                </Typography>
              </Skill>
            ))}
          </SkillContainer>
        </SectionSkill>
        <SectionSkill>
          <SectionTitle
            light
            customShape='shape12'
            customPadding={'1.2rem'}
            fontSize={3}
            title='SOFT SKILLS'
            fontWeight={400}
          />
          <SkillContainer>
            {aboutMeData.softSkills.skills.map((skill, index) => (
              <Skill key={index}>
                <SkillImg src={skill.icon} alt={skill.title} />
                <Typography size='1.6rem' weight={400}>
                  {skill.title}
                </Typography>
              </Skill>
            ))}
          </SkillContainer>
        </SectionSkill>
        <SectionSkill>
          <SectionTitle
            light
            customShape='shape14'
            customPadding={'1.2rem'}
            fontSize={3}
            title='LENGUAGES'
            fontWeight={400}
          />
          <SkillContainer>
            {aboutMeData.lenguages.lenguages.map(
              (lenguages, index) => (
                <Skill key={index}>
                  <SkillImg
                    src={lenguages.icon}
                    alt={lenguages.title}
                  />
                  <Typography size='1.6rem' weight={400}>
                    {lenguages.title}
                  </Typography>
                </Skill>
              )
            )}
          </SkillContainer>
        </SectionSkill>
        <SectionSkill>
          <SectionTitle
            light
            customShape='shape13'
            customPadding={'1.2rem'}
            fontSize={3}
            title='EDUCATION'
            fontWeight={400}
          />
          <SkillContainer>
            {aboutMeData.education.courses.map((courses, index) => (
              <Skill column key={index}>
                <Typography align='center' size='1.6rem' weight={600}>
                  {courses.institution}
                </Typography>
                <Typography align='center' size='1.6rem' weight={400}>
                  {courses.title}
                </Typography>
                <Typography align='center' size='1.6rem' weight={400}>
                  {courses.date}
                </Typography>
              </Skill>
            ))}
          </SkillContainer>
        </SectionSkill>
      </SkillsGroup>
    </div>
  )
}
