import type { Advert } from "../commons/Advert"

interface Props {
    advert: Advert;
}

export default function AdvertCard({advert}: Props) {
    return (
        <li>
        <h4>{advert.title}</h4>
        <p>{advert.description}</p>
        <img src={advert.photo} alt={advert.title} />
        </li>
    )
}