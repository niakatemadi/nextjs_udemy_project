import Link from "next/link";
import Heading from "../../components/Heading";
import { getReviews } from "../../lib/reviews";

export const metadata = {
    title : "Reviews"
}


export default async function Reviews(){

    const reviews = await getReviews();

    return (
        <>    
            <Heading>Reviews</Heading>            
            <ul className="flex flex-row flex-wrap gap-3">
                {
                    reviews.map((review) => {

                        return (
                        <li key={review.slug} className="bg-white w-80 border rounded shadow hover:shadow-xl">
                    <Link href={`/reviews/${review.slug}`}>
                        <img src={review.image} height="180" width="320" alt="" className="mb-2 rounded-t" />
                    </Link>
                    <h2 className="py-1 text-center font-orbitron font-semibold">{review.title}</h2>
                </li>)
                    })
                }
            </ul>
        </>
    );
}