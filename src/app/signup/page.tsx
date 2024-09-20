'use client';

import { PageContainer, withAuth } from '@/components';

const Signup = () => {
  return (
    <PageContainer>
      <h1>Signup</h1>
    </PageContainer>
  );
};

export default withAuth(Signup, []);
