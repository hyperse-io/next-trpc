import { auth, githubAuth } from '@/auth/lucia';
import { githubProviderHandlers } from '@xpro-js/next-auth';

export const GET = async () => {
  return githubProviderHandlers.authorizeHandler(auth, githubAuth, {
    secure: process.env.NODE_ENV === 'production',
  });
};
