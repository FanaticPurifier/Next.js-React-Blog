import PostFeed from '../../components/PostFeed';
import UserProfile from '../../components/UserProfile';

export default function UserProfilePage({ user, posts }) {
    return (
        <main>
            <UserProfile user={user}/>
            <PostFeed posts={posts} />
        </main>
    )
}