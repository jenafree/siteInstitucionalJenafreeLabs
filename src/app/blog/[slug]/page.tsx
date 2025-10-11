import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-bgAlt to-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar para o Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-text mb-4">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-4">
              {post.description}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <time className="text-sm text-slate-500" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <article className="max-w-4xl mx-auto prose prose-slate lg:prose-lg">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>

      {/* Separator */}
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Separator className="my-8" />
      </div>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center bg-bgAlt p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-text mb-4">
              Gostou do conteúdo?
            </h2>
            <p className="text-slate-600 mb-6">
              Descubra como podemos ajudar sua empresa com QA de qualidade.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

