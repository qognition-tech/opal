"use client";

import { BlogCard, BlogCardSkeleton } from "@/components/common/blog-card";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Navbar } from "@/components/common/navbar";
import { SectionContainer } from "@/components/common/section";
import { useBlogs, type Blog } from "@/hooks/wp/use-blogs";

export default function AllBlogsPage() {
    const { data: blogs, isLoading } = useBlogs({ count: 100 });

    return (
        <div className="flex min-h-screen w-full flex-col gap-4">
            <Navbar />
            <div className="flex w-full flex-col gap-4 pt-[132px]">
                <Header title="Blogs" />
                </script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>
    Latest Blogs And Stories | Opal Consulting Sydney
    </title>
    <meta name="description" content="Read the latest blogs about migration, study tips, and visas in Australia. Insights from Sydney’s experienced migration agents.">
    <link rel="canonical" href="https://www.opalconsulting.com.au/blogs">
                <BlogsSection blogs={blogs} isLoading={isLoading} />
            </div>
            <Footer />
        </div>
    );
}

function BlogsSection({ blogs, isLoading }: { blogs: Blog[] | undefined; isLoading: boolean }) {
    return (
        <SectionContainer>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)
                    : blogs?.map((blog) => {
                          const { title, content, slug } = blog;
                          const featuredMedia = blog._embedded?.["wp:featuredmedia"]?.[0];
                          const imageUrl = featuredMedia?.media_details?.sizes?.["mirai-reg"]?.source_url;
                          const fullImageUrl = featuredMedia?.media_details?.sizes?.full?.source_url;

                          const formattedDate = new Date(blog.modified_gmt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                          });

                          const strippedExcerpt = content.rendered.replace(/<[^>]+>/g, "");

                          return (
                              <BlogCard
                                  key={slug}
                                  title={title.rendered}
                                  description={strippedExcerpt}
                                  image={imageUrl || fullImageUrl || "/images/placeholder.png"}
                                  imageAlt={title.rendered}
                                  date={formattedDate}
                                  slug={slug}
                              />
                          );
                      })}
            </div>
        </SectionContainer>
    );
}
