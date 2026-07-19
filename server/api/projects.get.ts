export interface GitHubRepo {
  stargazers_count: number;
  name: string;
  html_url: string;
}

// Names of the repos surfaced on the home page (order defined on the client).
const FEATURED = ["lanyard-profile-readme", "tsogtoo.dev"];

// Replaces the old Next.js getStaticProps (revalidate: 3600). Caching /
// revalidation is handled by the `swr: 3600` route rule in nuxt.config.ts.
export default defineEventHandler(async (): Promise<GitHubRepo[]> => {
  const repos = await $fetch<GitHubRepo[]>(
    "https://api.github.com/users/tsogtoodev/repos?type=owner&per_page=100",
  );

  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .filter((repo) => FEATURED.includes(repo.name));
});
