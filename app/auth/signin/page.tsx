"use client";

import { getProviders, signIn, ClientSafeProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  type Providers = Record<string, ClientSafeProvider> | null;
  const [providers, setProviders] = useState<Providers>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>Sign in to your account</h1>
      {providers ? (
        Object.values(providers).map((provider) => {
          const typedProvider = provider as ClientSafeProvider;
          return (
            <div key={typedProvider.name} style={{ margin: "1rem 0" }}>
              <button onClick={() => signIn(typedProvider.id)} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
                Sign in with {typedProvider.name}
              </button>
            </div>
          );
        })
      ) : (
        <p>Loading providers...</p>
      )}
    </div>
  );
} 