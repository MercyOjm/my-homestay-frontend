import './destinationcard.css';

const DestinationCard = (props) => {
    return (
<div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={props.imgUrl} alt="" style={{height:'262px'}}/>
                    <a className="destination-overlay text-white text-decoration-none" href={"/properties?city="+props.city}>
                        <h5 className="text-white">{props.city}</h5>
                        <span>{props.slogan}</span>
                    </a>
                </div>
    )
}
export default DestinationCard;