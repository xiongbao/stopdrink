import CodeHighlightedContent from "./_components/CodeHighlightedContent";
import { getPostDetail } from "@/lib/api";
import type { Metadata } from "next";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = (await getPostDetail(params.id)).data.repository.discussion;
  const strippedString = post.bodyHTML.replace(/(<([^>]+)>)/gi, "");

  return {
    title: `${post.title} | Ulvi Damirli`,
    description: strippedString.trim().slice(0, 150),
    alternates: {
      canonical: `/records/${post.number}`,
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = params;
  const post = (await getPostDetail(id)).data.repository.discussion;

  return (
    <main className="px-4 my-20">
      <article className="prose prose-lg mx-auto prose-neutral prose-invert prose-img:rounded-lg prose-img:w-full prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-pre:bg-[#0c1117] prose-pre:p-2 prose-pre:rounded-xl">
        <h1>{post.title}</h1>
        <div className="px-4 rounded-lg border-[0.5px] border-white/20 bg-black/10 backdrop-blur-lg hover:bg-black/30"><CodeHighlightedContent content={post.bodyHTML} /></div>
      </article>
    </main>
  );
};

export default Page;
