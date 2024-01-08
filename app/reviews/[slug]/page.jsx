import Heading from "../../../components/Heading";
import ShareButtons from "../../../components/ShareButtons";
import { getReview, getSlugs } from "../../../lib/reviews";

export async function generateStaticParams(){
    const slugs = await getSlugs();

    return slugs.map((slug) => ({slug}))
}

export async function generateMetadata({params : { slug }}){
    const review = await getReview(slug);

    return {
        title : review.title
    }

}

export default async function ReviewPage({params : { slug }}){

    const review = await getReview(slug);

    return (
        <>
            <Heading>{review.title}</Heading>
            <div className="flex items-baseline gap-3">
                <p className="italic pb-2">{review.date}</p>
                <ShareButtons />
            </div>
            <img src={review.image} height="360" width="640" alt="" className="mb-2 rounded" />
            <article dangerouslySetInnerHTML={{__html : review.body}} className="max-w-screen-sm prose prose-slate" />
        </>
    );
}