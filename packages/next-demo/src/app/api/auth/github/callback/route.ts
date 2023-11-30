import { authorizeCallbackHandler } from '@hyperse-io/next-auth';
import type { NextRequest } from 'next/server';
import { auth, githubAuth } from '@/auth/lucia';

/**
 * Upon authentication, the provider will redirect the user back to your application (GET request).
 * The url includes a code, and a state if the provider supports it. If a state is used, make sure to check if the state in the query params is the same as the one stored as a cookie.
 * @returns
 */
export const GET = async (request: NextRequest) => {
  return authorizeCallbackHandler(auth, githubAuth, request);
};
