import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image"
import { forwardRef } from "react";

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original'
    const {poster_path, backdrop_path, overview,title, name, original_name, media_type, vote_count, first_air_date, release_date} = result;
    return (
        <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout="responsive"
                src={`${BASE_URL}${backdrop_path || poster_path }` || `${BASE_URL}${poster_path}`}
                height={1080}
                width={1920}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{overview}</p>
                <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{title || name || original_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {media_type && `${media_type} .`}{' '}
                    {release_date || first_air_date} . {''}
                    <ThumbUpIcon className="h-5 mx-2"/>{vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
