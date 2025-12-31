import type {
  Project,
  StrapiPost,
  StrapiProject,
  StrapiResponse,
} from "~/types";
import type { Route } from "./+types/index";
import type { Post } from "~/types";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";
import LatestPosts from "~/components/LatestPost";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website Development" },
  ];
}
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
        },
      }
    ),
    fetch(
      `${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
        },
      }
    ),
    ,
  ]);

  if (!projectRes.ok && !postRes.ok)
    throw new Error("Failed to fetch projects or posts");

  // const [projects, posts] = await Promise.all([
  //   projectRes.json(),
  //   postRes.json(),
  // ]);
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();
  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();

  const projects = projectJson.data.map((item) => ({
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
  }));

  const posts = postJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    image: item.image?.formats?.small?.url
      ? `${item.image.formats.small.url}`
      : "/images/no-image.png",
    date: item.date,
    slug: item.slug,
    body: item.body,
  }));

  return { projects, posts };
}

const Home = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData as {
    projects: Project[];
    posts: Post[];
  };
  // console.log(posts);
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPosts posts={posts} limit={3} />
    </>
  );
};

export default Home;
