import { AxiosResponse } from 'axios';

import { handleErrorResponse } from '../api/libs/helpers';
import { BaseServiceResponse } from '../types';

import { POST_PATHS } from './contants';
import postMethods from './methods';
import { Post } from './types';

/**
 * @description Gets all posts from the API.
 * @returns {Promise<BaseServiceResponse<Post[]>>} A Promise that resolves to an array of Post.
 */
export const getPosts = async (): Promise<BaseServiceResponse<Post[]>> => {
  try {
    const response = await postMethods.get<Post[]>(POST_PATHS.GET_POSTS);

    return {
      data: response.data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return handleErrorResponse(e);
  }
};

/**
 * @description Gets a post from the API.
 * @param {string} id The id of the post to get.
 * @returns {Promise<BaseServiceResponse<Post>>} A Promise that resolves to a Post.
 */
export const getPost = async (
  id: string,
): Promise<BaseServiceResponse<Post>> => {
  try {
    const response = await postMethods.get<Post>(
      POST_PATHS.GET_POST.replace(':id', id),
    );

    return {
      data: response.data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return handleErrorResponse(e);
  }
};

/**
 * @description Creates a post in the API.
 * @param {Post} post The post to create.
 * @returns {Promise<BaseServiceResponse<Post>>} A Promise that resolves to a Post.
 */
export const createPost = async (
  post: Post,
): Promise<BaseServiceResponse<Post>> => {
  try {
    const response = await postMethods.post<Post, AxiosResponse<Post>>(
      POST_PATHS.CREATE_POST,
      post,
    );

    return {
      data: response.data.data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return handleErrorResponse(e);
  }
};

/**
 * @description Updates a post in the API.
 * @param {Post} post The post to update.
 * @returns {Promise<BaseServiceResponse<Post>>} A Promise that resolves to a Post.
 */
export const updatePost = async (
  post: Post,
): Promise<BaseServiceResponse<Post>> => {
  try {
    const response = await postMethods.put<Post, AxiosResponse<Post>>(
      POST_PATHS.UPDATE_POST.replace(':id', post.id.toString()),
      post,
    );

    return {
      data: response.data.data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return handleErrorResponse(e);
  }
};

/**
 * @description Deletes a post from the API.
 * @param {string} id The id of the post to delete.
 * @returns {Promise<BaseServiceResponse<Post>>} A Promise that resolves to a Post.
 */
export const deletePost = async (
  id: string,
): Promise<BaseServiceResponse<Post>> => {
  try {
    const response = await postMethods.remove<Post>(
      POST_PATHS.DELETE_POST.replace(':id', id),
    );

    return {
      data: response.data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return handleErrorResponse(e);
  }
};
