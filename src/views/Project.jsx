import ProjectsHeader from '../components/ProjectsHeader'
import ProjectsInfo from '../components/ProjectsInfo'
import { useParams, ScrollRestoration } from 'react-router-dom'
import { projectsData } from '../constants/projectsData'
import { useEffect, useState } from 'react'
export default function Project() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  useEffect(() => {
    const project = projectsData.find((project) => project.id === id)
    setProject(project)
  }, [id])

  return (
    <>
      <ScrollRestoration />
      <ProjectsHeader project={project} />
      <ProjectsInfo project={project} />
    </>
  )
}
