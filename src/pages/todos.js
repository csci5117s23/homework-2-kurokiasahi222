import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function TodoPage() {

    const { isSignedIn, isLoading, user } = useUser();
    const router = useRouter(); 

    useEffect(() => {
        if (!isSignedIn) {
            router.push('/'); 
        }
    })
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
                        null
                        }
                    </div>
                </main>
            )
            }
        </>
    ); 
}