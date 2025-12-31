import type { Route } from "./+types";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export async function loader({ request, params }: Route.LoaderArgs) {
  // const res = await fetch(
  //   `${import.meta.env.VITE_API_URL}/projects/${params.id}`
  // );
  const { id } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
      },
    }
  );

  if (!res.ok) throw new Response("Project Not Found", { status: 404 });
  const json: StrapiResponse<StrapiProject> = await res.json();
  const item = json.data[0];

  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.formats?.small?.url
      ? `${item.image.formats.small.url}`
      : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  };
  console.log(project);
  // const project: Project = await res.json();
  return { project };
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;
  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-sm text-gray-300 mb-4">
            {new Date(project.date).toLocaleDateString()} · {project.category}
          </p>
          <p className="text-gray-200 mb-6">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            View Live Site
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
