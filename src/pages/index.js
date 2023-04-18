import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import { useRouter } from 'next/router'
import { useAuth, useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  const { userId } = useAuth();
  const { isSignedIn, isLoading } = useUser();
  const router = useRouter()
  console.log(router)

  function Redirect() {
    router.push('/todos')
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main className={styles.main}>
          <div className={styles.container}>
            {isSignedIn ? (
              <>
                {/* redirect to todos */}
                <Redirect />
              </>
            ) : (
              <div className={styles.label}>
                <p>Sign in to create your todo list!</p>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}

