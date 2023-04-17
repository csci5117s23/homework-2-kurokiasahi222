import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import { useRouter } from 'next/router'
import { useAuth, useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, isLoading, user } = useUser();
  const router = useRouter()
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
                {router.push('/todos')}
              </>
            ) : (
              <div className={styles.label}>
                Sign in to create your todo list!
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}

