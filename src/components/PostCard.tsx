import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
};

export default function PostCard({ title, description, date, slug, tags = [] }: Props) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full hover:shadow-hover transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <time className="text-sm text-slate-500" dateTime={date}>
              {new Date(date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}


