/**
 * @description if the response is an error and backend not responding as expected
 */
export const SERVICE_RESPONSE_MESSAGES = {
  BASE: {
    BAD_REQUEST: 'Bad Request',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not Found',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    SERVICE_UNAVAILABLE: 'Service Unavailable',
  },
  POSTS: {
    GET: {
      SUCCESS: 'Posts fetched successfully. We have a total of {1} Posts.',
      FAILURE: 'Posts fetch failed',
    },
    UPDATE: {
      SUCCESS: 'Post updated successfully, {1} products were updated',
      FAILURE: '{1} Post update failed. Please try again.',
    },
    DELETE: {
      SUCCESS: 'Post deleted successfully',
      FAILURE: 'Post delete failed',
    },
    CREATE: {
      SUCCESS: 'Post created successfully',
      FAILURE: 'Post create failed',
    },
  },
} as const;
