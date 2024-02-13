import React from 'react';
import { useGetPostsQuery } from '@webpack-nx-mehrzweck/data';
import { Checkbox } from '@webpack-nx-mehrzweck/ui';

import { DialogDemo } from './Dialog';

export default function PostList() {
  const { data = [], isLoading: isFetching } = useGetPostsQuery(undefined, {
    pollingInterval: 50000,
  });

  if (isFetching) {
    return (
      <div className="flex items-center justify-center w-full h-full p-8 bg-gray-100 rounded-lg">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-full p-4 overflow-y-auto bg-gray-100 rounded-md h-96">
      <DialogDemo />
      <h1>Posts</h1>
      <ul className="grid w-full grid-cols-4 gap-x-4">
        {data.map((post, i) => (
          <li className="flex items-center w-full gap-3 border-b border-gray-300" key={post.id}>
            <Checkbox
              checked={i % 2 === 0}
              id={post.id.toString()}
            />
            <label
              className="cursor-pointer peer-checked:text-gray-500 peer-checked:line-through line-clamp-1"
              htmlFor={post.id.toString()}
              title={post.title}
            >
              {post.title.slice(0, 20)}
            </label>
            <span className="ml-auto text-sm text-gray-500 peer-checked:text-gray-500 peer-checked:line-through">
              {post.userId}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
