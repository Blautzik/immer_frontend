import Link from "next/link"

type CategoryCardProps = {
    id: string,
    img: string,
    title: string,
}

export default function CategoryCard({
    id, img, title
}: CategoryCardProps) {
    return (
        <Link href={'/spectator'}>
            <div
                style={{ backgroundImage: `url(${img})` }}
                className='flex flex-col justify-end w-11/12 bg-no-repeat bg-cover rounded-2xl mb-2 shadow-sm h-24'
            >
                <div className="flex flex-col bg-white bg-opacity-95 text-center text-[#5a5a5a] w-full h-8 text-xs justify-center font-bold">{title}</div>

            </div>
        </Link>
    )
}