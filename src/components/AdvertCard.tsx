import type { Advert } from "../commons/Advert"

interface Props {
    data: Advert;
}

export default function AdvertCard({data}: Props) {
    return (
        <li className="bg-amber-50 border-1 rounded-md">
        <h4 className="text-2xl font-bold dark:text-white">{data.title}</h4>
        <p className="indent-8">{data.description}</p>
        <img src={data.photo} alt={data.title} />
        </li>
    )
}