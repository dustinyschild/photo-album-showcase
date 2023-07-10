import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import AlbumCard from "../components/AlbumCard";

export default function Home({ albumCards }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photo Album Showcase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main data-testid="main-content" className={styles.center}>
        <div className={styles.mainContent}>
          {albumCards.map((card) => (
            <AlbumCard key={card.albumId} {...card} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

// serverside data fetching
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();

  const albumCards = [];

  // get first photo in each album
  photos.forEach((photo) => {
    if (albumCards[photo.albumId - 1]) {
      return;
    } else {
      albumCards.push(photo);
    }
  });

  // Pass data to the page via props
  return { props: { albumCards } };
}
