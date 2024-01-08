import Heading from '.././components/Heading'
import Link from 'next/link';
import { getFeaturedReview } from '../lib/reviews';

export default async function HomePage(){

    const {title, slug, image} = await getFeaturedReview();

    return (
        <>
            <Heading> Indie Gamer</Heading>
            <p className='pb-3'>Only the best indie games, reviewed for you</p>
            <div className="bg-white w-80 sm:w-full border rounded shadow hover:shadow-xl">
                <Link href={`/reviews/${slug}`} className='flex flex-col sm:flex-row'>
                    <img src={image} height="180" width="320" alt="" className="rounded-t sm:rounded-l sm:rounded-r-none" />
                    <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2"> { title }</h2>
                </Link>
            </div>
        </>
    );
}