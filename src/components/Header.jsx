import styles from "../styles/Home.module.css";
import { useAuth, useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header(){
    const { isSignedIn } = useUser();
    console.log("Signed in: " + isSignedIn);
    return (
        <header className={styles.header}>
            <div>My To-do-list</div>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div> 
                <Link href="/Done">Done</Link>
            </div>
            {isSignedIn ? (
                <UserButton />
            ) : (
                <div>
                    <SignInButton />
                    &nbsp;
                    <SignUpButton />
                </div>
            )}
        </header>
    );
};