
import Head from "next/head";
import "tailwindcss/tailwind.css";

interface SocialLink {
    name: string;
    url: string;
}

const socialLinks: SocialLink[] = [
    {
        name: "Github",
        url: "https://github.com/iJimmyWei"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jimmy-wei-901a58178/"
    }
];

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Head>
                <title>Jimmy Wei</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center p-5">
                <h1 className="text-5xl p-3 font-bold">
                    Jimmy Wei
                </h1>
                <p className="p-3">
                    I'm a Software Engineer at <b><a target="blank" rel="noreferer noopener" href="https://connectchildcare.com/">Connect Childcare</a></b>
                </p>
                <p className="p-3">
                    "I love programming, and solving problems with attention to detail.
                    <br />No two problems are the same. Solutions shouldn't be complicated."
                </p>
                <div id="social" className="flex space-x-2">
                    {socialLinks.map((socialLink) => {
                        const { name, url } = socialLink;

                        return (
                            <a
                                key={name}
                                target="blank"
                                rel="noreferer noopener"
                                href={url}
                            >
                                <div className="bg-gray-200 hover:bg-gray-300 rounded p-2 my-1">
                                    <b>{name}</b>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
