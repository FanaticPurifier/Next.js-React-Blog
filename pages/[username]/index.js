import Metatags from '../../components/Metatags';
import PostFeed from '../../components/PostFeed';
import UserProfile from '../../components/UserProfile';
import { getUserWithUsername, postToJSON } from '../../lib/firebase';

export async function getServerSideProps({ query }) {
    const { username } = query;

    const userDoc = await getUserWithUsername(username);
    
    let user = null;
    let posts = null;

    // If no user, short circuit to 404 page
    if (!userDoc) {
        return {
        notFound: true,
        };
    }


    if (userDoc) {
        user = userDoc.data();
        const postsQuery = userDoc.ref
          .collection('posts')
          .where('published', '==', true)
          .orderBy('createdAt', 'desc')
          .limit(5);
        posts = (await postsQuery.get()).docs.map(postToJSON);
      }

    return {
        props: { user, posts },
    }
}

export default function UserProfilePage({ user, posts, admin }) {
    return (
        <main>
            <Metatags title="User Profile Page" />
            <UserProfile user={user}/>
            <PostFeed posts={posts} admin={admin} />
        </main>
    )
}