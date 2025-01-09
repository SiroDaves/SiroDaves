export interface Blog {
  title: string;
  brief: string;
  url: string;
  views: number;
  replyCount: number;
  reactionCount: number;
  coverImage: string;
  readTimeInMinutes: number;
  publishedAt: string;
}

export async function getHashnode(): Promise<Blog[]> {
  const res = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        publication(host: "siro.hashnode.dev") {
          posts(first: 3) {
            edges {
              node {
                title
                brief
                url
                coverImage {
                  url
                }
                views
                replyCount
                reactionCount
                readTimeInMinutes
                publishedAt
              }
            }
          }
        }
      }`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const data = await res.json();

  if (!data.data?.publication?.posts?.edges) {
    throw new Error("Unexpected response structure from Hashnode API");
  }

  const blogs: Blog[] = data.data.publication.posts.edges.map((edge: { node: any }) => ({
    title: edge.node.title,
    brief: edge.node.brief,
    url: edge.node.url,
    views: edge.node.views || 0,
    replyCount: edge.node.replyCount || 0,
    reactionCount: edge.node.reactionCount || 0,
    coverImage: edge.node.coverImage?.url || "",
    readTimeInMinutes: edge.node.readTimeInMinutes || 0,
    publishedAt: edge.node.publishedAt,
  }));

  return blogs;
}
