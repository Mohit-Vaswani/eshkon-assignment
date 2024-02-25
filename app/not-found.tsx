'use client'
// Make sure to include 'use client' at the beginning of your code if you meant 'use strict';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    const [randomMeme, setRandomMeme] = useState<string | null>(null);
    const [memeCaption, setMemeCaption] = useState<string | null>(null);

    useEffect(() => {
        const fetchRandomMeme = async () => {
            try {
                const response = await fetch('https://api.memegen.link/templates');
                const data = await response.json();

                const randomIndex = Math.floor(Math.random() * data.length);
                const randomTemplate = data[randomIndex];

                if (randomTemplate.example) {
                    const example = randomTemplate.example.url;
                    const caption = randomTemplate.name;
                    setRandomMeme(example);
                    setMemeCaption(caption);
                } else {
                    console.warn('No example URL found for the meme template.');
                    setRandomMeme(null);
                    setMemeCaption(null);
                }
            } catch (error) {
                console.error('Error fetching random meme:', error);
                setRandomMeme(null);
                setMemeCaption(null);
            }
        };

        fetchRandomMeme();
    }, []);

    return (
        <main className="flex flex-1 flex-col items-center justify-center py-6 text-center sm:py-12">
            <div />
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Embrace the Oops!</h1>
                <p className="mx-auto text-gray-600 md:text-xl/relaxed pb-6">
                    It's a 404 error. The page you're looking for can't be found.
                </p>
            </div>
            <article className="mx-auto max-w-sm p-0 w-full rounded-md">
                <div className="flex overflow-hidden rounded-t-lg">
                    {randomMeme && (
                        <Image
                            src={randomMeme}
                            alt="Random Meme"
                            width={400}
                            height={300}
                            className='object-cover'
                            loader={({ src }) => src}
                        />
                    )}

                    {!randomMeme && <p>Oops! Something went wrong. No memes for you!</p>}
                </div>
                <div className="p-4 space-y-2">
                    <p className="text-sm text-gray-600">Caption: {memeCaption}</p>
                </div>
            </article>
            <Link
                className="inline-flex h-9 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
                href="/"
            >
                Back to site
            </Link>
        </main>
    )
}