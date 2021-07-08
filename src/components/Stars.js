export default function Stars({ rating }) {
    rating /= 2;

    const perctg = (rating / 5) * 100;
    const perctgRounded = `${Math.round(perctg / 10) * 10}%`;

    return (
        <div className="stars">
            <div className="outer">
                <div style={{ width: perctgRounded }} className="inner"></div>
            </div>

            <div className="rating">{(rating).toFixed(2)}</div>
        </div>
    )
}
