const Property = ({property}) => {
    return (<div className="package-item mb-2">
        <img className="img-fluid" src={property.images[0].picture_url} alt="" style={{height:"268px", width:"349px"}}/>
        <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{property.address.city}</small>
                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>{property.suitablePeopleCount} Person</small>
            </div>
            <a className="h5 text-decoration-none" href="">{property.name}</a>
            <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{property.review_scores.review_scores_rating} <small>({property.reviews.length})</small></h6>
                    <h5 className="m-0">€{property.price}</h5>
                </div>
            </div>
        </div>
        <a href={"/properties/"+property._id} class="stretched-link text-decoration-none">
              </a>
    </div>)
}
export default Property;