import { useSearchParams } from "next/navigation";

const errorMessages: Record<string, string> = {
  Signin: "Try signing in with a different account.",
  OAuthSignin: "Error in constructing an authorization URL.",
  OAuthCallback: "Error in handling the response from the OAuth provider.",
  OAuthCreateAccount: "Error in creating an OAuth account.",
  EmailCreateAccount: "Error in creating an email account.",
  Callback: "Error in the callback handler.",
  OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Error in sending the email.",
  CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in. Please try again."
};

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const errorMessage = error ? (errorMessages[error] || errorMessages.default) : errorMessages.default;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>Authentication Error</h1>
      <p style={{ color: "red", margin: "1rem 0" }}>{errorMessage}</p>
      <a href="/auth/signin" style={{ color: "blue", textDecoration: "underline" }}>Back to Sign In</a>
    </div>
  );
} 