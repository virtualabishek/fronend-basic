function ProfileHero() {
    return(
        <img src="https://i.imgur.com/MK3eW3As.jpg"
        alt = "My favoriate"/>
    );
}

export default function App() {
    return(
        <>
        <h1>Amazing Scientist</h1>
        <ProfileHero/>
        <ProfileHero/>
        <ProfileHero/>
        </>
    );
}