import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import styles from "../styles/Home.module.css";
import { useAuth, useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function todos() {
    const { isSignedIn, isLoading, user } = useUser();
    return (
        <>
            <Header />
            {isLoading ? (
                <p> Loading... </p>
            ) : (
                <main className={styles.main}>
                    <div className={styles.container}>
                        {isSignedIn ? (
                            <>
                                <div className={styles.label}>Welcome {user.firstName}!</div>
                                <ToDoList />
                            </>
                        ) : 
                        (
                            <div className={styles.label}>
                                Sign in to create your todo list!
                            </div>
                        )
                        }
                    </div>
                </main>
            )
            }
        </>
    ); 
}