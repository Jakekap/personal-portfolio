import SectionTitle from '../components/SectionTitle'
import { projectsData } from '../constants/projectsData.js'
import ProjectsMasonry from '../components/ProjectsMasonry/index.jsx'
import { ScrollRestoration } from 'react-router-dom'
export default function AllProjects() {
  return (
    <div>
      <ScrollRestoration />
      <SectionTitle
        title={
          <div>
            MY <br /> WEB PROJECTS
          </div>
        }
      />
      <ProjectsMasonry projects={projectsData} margin='5rem 0' />
    </div>
  )
}
