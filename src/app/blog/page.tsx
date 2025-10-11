import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights e boas práticas em QA, automação e qualidade de software",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-bgAlt to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Insights, tutoriais e boas práticas em QA e automação
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-600 py-12">
              <p>Nenhum post publicado ainda. Em breve teremos conteúdo novo!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

