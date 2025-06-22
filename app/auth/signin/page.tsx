import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [providers, setProviders] = useState(null);

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
        Object.values(providers).map((provider) => (
          <div key={provider.name} style={{ margin: "1rem 0" }}>
            <button onClick={() => signIn(provider.id)} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
              Sign in with {provider.name}
            </button>
          </div>
        ))
      ) : (
        <p>Loading providers...</p>
      )}
    </div>
  );
} 