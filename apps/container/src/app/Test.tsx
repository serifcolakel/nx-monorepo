/* eslint-disable max-len */
import { queryClient, useQuery } from 'packages/data/src/providers/TanStackQueryProvider';
import { Post } from 'packages/data/src/services/post/types';

sessionStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzZXNzaW9uSW5mbyI6eyJzZXNzaW9uSUQiOiJKSEpNeS9hOXg3UHE2QVZCaGJIMDU4UnRvNW1XYnBocU1SUXFWS0VWVDIwPSIsImRvbWFpbk9JRCI6IjAyc2ExaTJkcDd4a2xiejUiLCJ1c2VybmFtZSI6Ijk0OTAySSIsImRldGFpbHMiOnsiYmltTm8iOiI5NDkwMkkiLCJtdWhPcmdhbml6YXRpb25JRCI6IjAxMDAwIiwibXVkdXJsdWtLb2R1IjoiMDEwMDAiLCJjdXJyZW5jeUNvZGUiOiIyIiwiZnVsbE5hbWUiOiJBQkRVTEtBRMSwUiBCQUxJSyIsIm9yZ2FuaXphdGlvbk5hbWUiOiLFnkFSVE5BTUUgR0VMxLDFnlTEsFJNRSBNw5xEw5xSTMOcxJ7DnCJ9fSwiaWF0IjoxNzA4NzA0NjQxLCJleHAiOjE3MDg4Nzc0NDF9.rmDzbIbKLH3m7EjtVH5vWypQU4-fapF0Vi7eKQ0FhDW2yOnf43z7s6nXxjMf55OGQkCz1eo-zcsjKGee9QK47A');

export default function Test() {
  const { data = [], isLoading, isFetching } = useQuery({
    queryKey: [ 'todos' ],
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    initialData: () => {
      const l: Post[] = queryClient.getQueryData([ 'todos' ]) ?? [];

      if (l) {
        return l;
      }

      return [];
    },
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')!}`,
        },

      });

      const allPosts = await response.json() as Post[];

      return allPosts;
    },
  });

  const updatePostFromCache = (id: number) => {
    queryClient.setQueryData([ 'todos' ], (oldData: Post[] | undefined) => {
      if (!oldData) {
        return [];
      }

      return oldData.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            title: Math.random().toString(36).substring(7),
          };
        }

        return post;
      });
    });
  };

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center w-full h-full p-8 bg-gray-100 rounded-lg">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="p-4 overflow-y-auto bg-gray-100 rounded-md h-96">
      <h1>Posts</h1>
      <ul className="grid grid-cols-4 gap-x-4">
        {data.map((post, i) => (
          <li className="flex items-center gap-3 border-b border-gray-300" key={post.id}>
            <input
              readOnly
              checked={i % 2 === 0}
              className="peer"
              id={post.id.toString()}
              type="checkbox"
            />
            <label
              className="cursor-pointer peer-checked:text-gray-500 peer-checked:line-through line-clamp-1"
              htmlFor={post.id.toString()}
              title={post.title}
            >
              {post.title}
            </label>
            <span className="ml-auto text-sm text-gray-500 peer-checked:text-gray-500 peer-checked:line-through">
              {post.userId}
            </span>
            <button onClick={() => updatePostFromCache(post.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
