import Link from 'next/link';
export default function About() {
    return (
      <div>
        <p>This is the about page by AA </p>
        <p>otro más</p>
        <Link href="/">
          <a>Home</a>
        </Link>

      </div>
    );
  }