import { MetadataRoute } from "next";

const BASE_URL = "https://www.opalconsulting.com.au";
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || "https://cms.opalconsulting.com.au/wp-json/wp/v2";

interface WpSitemapItem {
    slug: string;
    modified_gmt?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/testimonials`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
    ];

    // Fetch dynamic routes
    const [blogs, migrations, educations] = await Promise.all([getBlogs(), getMigrationRoutes(), getEducationRoutes()]);

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: blog.modified_gmt ? new Date(blog.modified_gmt) : new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    const migrationRoutes: MetadataRoute.Sitemap = migrations.map((migration) => ({
        url: `${BASE_URL}/migration/${migration.slug}`,
        lastModified: migration.modified_gmt ? new Date(migration.modified_gmt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const educationRoutes: MetadataRoute.Sitemap = educations.map((education) => ({
        url: `${BASE_URL}/education/${education.slug}`,
        lastModified: education.modified_gmt ? new Date(education.modified_gmt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...migrationRoutes, ...educationRoutes];
}

async function getBlogs(): Promise<WpSitemapItem[]> {
    const response = await fetch(`${WORDPRESS_API_URL}/blog?_fields=slug,modified_gmt&per_page=100`, {
        next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    return response.json();
}

async function getMigrationRoutes(): Promise<WpSitemapItem[]> {
    const response = await fetch(`${WORDPRESS_API_URL}/migration?_fields=slug,modified_gmt&per_page=100`, {
        next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    return response.json();
}

async function getEducationRoutes(): Promise<WpSitemapItem[]> {
    const response = await fetch(`${WORDPRESS_API_URL}/courseoffer?_fields=slug,modified_gmt&per_page=100`, {
        next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    return response.json();
}
