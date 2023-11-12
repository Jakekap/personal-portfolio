import ProjectsHeader from '../components/ProjectsHeader'
import ProjectsInfo from '../components/ProjectsInfo'
import { useParams } from 'react-router-dom'
import { projectsData } from '../constants/projectsData'
import { useEffect, useState } from 'react'

export default function Projects() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  useEffect(() => {
    const project = projectsData.find((project) => project.id === id)
    setProject(project)
  }, [id])

  return (
    <>
      <ProjectsHeader project={project} />
      <ProjectsInfo project={project} />
    </>
  )
}
