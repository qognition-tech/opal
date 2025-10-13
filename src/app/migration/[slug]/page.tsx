import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { LatestNews } from "@/components/common/latest-news";
import { Navbar } from "@/components/common/navbar";
import { SectionContainer } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { Migration, getMigration, OgImage } from "@/hooks/wp/use-migration";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const migrationResponse = await getMigration(slug);

    if (!migrationResponse || migrationResponse.length === 0) {
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist.",
        };
    }

    const migration = migrationResponse[0];
    const { yoast_head_json } = migration;

    return {
        title: yoast_head_json?.title || migration.title.rendered,
        description: yoast_head_json?.og_description || "",
        openGraph: {
            title: yoast_head_json?.og_title || migration.title.rendered,
            description: yoast_head_json?.og_description || "",
            locale: yoast_head_json?.og_locale || "en_US",
            siteName:
                yoast_head_json?.schema?.["@graph"]?.find((item: { "@type": string }) => item["@type"] === "WebSite")
                    ?.name || "Opal Consulting",
            url: yoast_head_json?.og_url || migration.link,
            type: "article",
            images:
                yoast_head_json?.og_image?.map((image: OgImage) => ({
                    url: image.url,
                    width: image.width,
                    height: image.height,
                })) || [],
        },
    };
}

export default async function MigrationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const migrationResponse = await getMigration(slug);

    if (!migrationResponse || migrationResponse.length === 0) {
        notFound();
    }

    const migration = migrationResponse[0];

    return (
        <div className="flex min-h-screen w-full flex-col gap-4">
            <Navbar />
            <div className="flex w-full flex-col gap-4 pt-[132px]">
                <Header title={migration.title.rendered} />
                <MigrationBody migration={migration} />
            </div>
            <Footer />
        </div>
    );
}

function MigrationBody({ migration }: { migration: Migration }) {
    const featuredMedia = migration._embedded?.["wp:featuredmedia"]?.[0];
    const imageUrl = featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.full?.source_url;
    const cleanedContent = migration.content.rendered.replace(/ class="[^"]*"/g, "");

    const formattedDate = new Date(migration.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <SectionContainer className="pt-0 sm:px-4 md:px-4 xl:px-4">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                <article className="w-full flex-1 md:col-span-2">
                    <div className="flex w-full flex-col gap-4">
                        {imageUrl && (
                            <div
                                className="relative w-full overflow-hidden rounded-2xl"
                                style={{ aspectRatio: "320 / 200" }}
                            >
                                <Image
                                    src={imageUrl}
                                    alt={migration.title.rendered}
                                    fill
                                    className="rounded-2xl object-cover object-center"
                                />
                                <Badge className="absolute right-2 bottom-2 bg-neutral-950/80 hover:bg-neutral-950/80">
                                    {formattedDate}
                                </Badge>
                            </div>
                        )}
                        <div
                            className="prose prose-neutral prose-base prose-img:rounded-2xl prose-headings:!font-albert-sans prose-headings:!leading-[1.3em] prose-headings:!tracking-[-1px] prose-headings:!font-normal prose-p:!font-geist prose-p:!leading-[1.4em] prose-p:!font-normal prose-p:!tracking-[-0.05px] prose-p:!text-lg [&_span]:!font-geist [&_a]:!text-primary-600 max-w-none [&_b]:!font-medium [&_span]:!text-lg [&_span]:!leading-[1.3em] [&_span]:!font-normal [&_span]:!tracking-[-0.05px] [&_strong]:!text-lg [&_strong]:!leading-[1.3em] [&_strong]:!font-medium [&_strong]:!tracking-[-0.05px]"
                            dangerouslySetInnerHTML={{ __html: cleanedContent }}
                        />
                    </div>
                </article>
                <aside className="md:col-span-1">
                    <div className="sticky top-[96px]">
                        <LatestNews />
                    </div>
                </aside>
            </div>
        </SectionContainer>
    );
}
