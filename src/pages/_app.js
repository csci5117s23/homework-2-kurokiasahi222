import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

function myToDoApp({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey= {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default myToDoApp;