// pages/auth/signin.tsx

import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers/index";
import { getProviders, } from "next-auth/react";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import AuthModal from "../AuthModal";

interface SignInProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
}

export default function SignIn({ providers }: SignInProps) {
  return (
    <div>
      <AuthModal providers={providers} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<SignInProps> = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
