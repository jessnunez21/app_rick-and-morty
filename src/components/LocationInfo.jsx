
const LocationInfo = ({ location, idLocation}) => {



    return (
        <article className="content__location">
            <h2 className="location__name">{location?.name}</h2>
            <ul className="location__items-ul">
                <li className="location__li_items"><span className="location__title">Tipe:</span><span className="location__value">{location?.type}</span></li>
                <li className="location__li_items"><span className="location__title">Dimension:</span><span className="location__value">{location?.dimension}</span></li>
                <li className="location__li_items"><span className="location__title">Population:</span><span className="location__value">{location?.residents.length}</span></li>
                <li className="location__li_items"><span className="location__title">Count:</span><span className="location__value">{idLocation}</span></li>
                    
                
            </ul>
        </article>


    )
}

export default LocationInfo