interface Blog {
  title: string;
  brief: string;
  url: string;
  coverImage: string;
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
              }
            }
          }
        }
      }`,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const blogs = data.data.publication.posts.edges.map((edge: any) => ({
    title: edge.node.title,
    brief: edge.node.brief,
    url: edge.node.url,
    coverImage: edge.node.coverImage?.url || "",
  }));

  return blogs;
}