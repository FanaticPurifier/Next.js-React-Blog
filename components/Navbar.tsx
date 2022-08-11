import Link from "next/link";

export default function Navbar() {
    const { user, username } = {user: null, username: null};

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* User is signed in and has username */}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <picture>
                                    <img src={user?.photoURL} alt="User Profile Picture"/>
                                </picture>
                                
                            </Link>
                        </li>
                    </>
                )}

                {/* User is not signed in OR has not created username */}
                {!username && (
                    <>
                        <li>
                            <Link href="/enter">
                                <button className="btn-blue">Log In</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}