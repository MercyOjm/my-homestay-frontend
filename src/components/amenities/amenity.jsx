import {
  MdTv,
  MdMicrowave,
  MdKitchen,
  MdPermScanWifi,
  MdSmokingRooms,
  MdBathtub,
  MdOutlineFamilyRestroom,
  MdFireHydrantAlt,
  MdSmokeFree,
  MdCoffeeMaker,
  MdCleaningServices,
  MdIron,
  MdCable,
  MdBathroom,
  MdBalcony,
} from "react-icons/md";
import {
  FaIntercom,
  FaUtensilSpoon,
  FaHotTub,
  FaHouseLock,
  FaFireExtinguisher,
  FaInternetExplorer,
  FaClock,
  FaSwimmingPool,
  FaElevator,
  FaEthernet,
  FaUmbrellaBeach
} from "react-icons/fa";
import { CgSmartHomeHeat, CgSmartHomeRefrigerator } from "react-icons/cg";
import {
  BiFirstAid,
  BiSolidWasher,
  BiDish,
  BiBlanket,
  BiSolidDryer,
  BiSolidParking,
  BiLaptop,
  BiCard,
} from "react-icons/bi";
import { GiGasStove, GiChickenOven, GiSaloon, GiElectricalSocket, GiBarbecue, GiGardeningShears } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { PiCoatHanger } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import "./amenity.css";

const amenitiesIcons = {
  TV: <MdTv></MdTv>,
  "Cable TV": <MdCable></MdCable>,
  Wifi: <MdPermScanWifi></MdPermScanWifi>,
  "Wireless Internet": <MdPermScanWifi></MdPermScanWifi>,
  Kitchen: <MdKitchen></MdKitchen>,
  "Smoking allowed": <MdSmokingRooms></MdSmokingRooms>,
  "Smoke detector": <MdSmokeFree></MdSmokeFree>,
  Shampoo: <GiSoap></GiSoap>,
  "Buzzer/wireless intercom": <FaIntercom />,
  Heating: <CgSmartHomeHeat></CgSmartHomeHeat>,
  "Family/kid friendly": <MdOutlineFamilyRestroom></MdOutlineFamilyRestroom>,
  "First aid kit": <BiFirstAid></BiFirstAid>,
  "Fire extinguisher": <MdFireHydrantAlt></MdFireHydrantAlt>,
  "Bed linens": <BiBlanket></BiBlanket>,
  "Extra pillows and blankets": <BiBlanket></BiBlanket>,
  Microwave: <MdMicrowave />,
  "Coffee maker": <MdCoffeeMaker></MdCoffeeMaker>,
  Refrigerator: <CgSmartHomeRefrigerator></CgSmartHomeRefrigerator>,
  Dishwasher: <BiSolidWasher />,
  Washer: <BiSolidWasher />,
  "Dishes and silverware": <BiDish />,
  "Cooking basics": <FaUtensilSpoon />,
  Oven: <GiChickenOven />,
  Iron: <MdIron></MdIron>,
  Stove: <GiGasStove />,
  "Cleaning before checkout": <MdCleaningServices></MdCleaningServices>,
  Waterfront: <FaUmbrellaBeach></FaUmbrellaBeach>,
  "Hangers": <PiCoatHanger />,
  "Hot water": <FaHotTub></FaHotTub>,
  "Hot tub": <FaHotTub></FaHotTub>,
  "Hair dryer": <GiSaloon></GiSaloon>,
  "Paid parking off premises": <BiSolidParking></BiSolidParking>,
  "Dryer": <BiSolidDryer></BiSolidDryer>,
  "Lock on bedroom door": <FaHouseLock></FaHouseLock>,
  "Laptop friendly workspace": <BiLaptop></BiLaptop>,
  "Fire extinguisher": <FaFireExtinguisher></FaFireExtinguisher>,
  "Internet": <FaInternetExplorer></FaInternetExplorer>,
  "24-hour check-in": <FaClock></FaClock>,
  "Air conditioning": <TbAirConditioning></TbAirConditioning>,
  "Wheelchair accessible": <FaWheelchair></FaWheelchair>,
  "Pool": <FaSwimmingPool></FaSwimmingPool>,
  "Free parking on premises": <BiSolidParking></BiSolidParking>,
  "Gym": <CgGym></CgGym>,
  "Elevator in building": <FaElevator></FaElevator>,
  "Indoor fireplace": <GiFireplace></GiFireplace>,
  "Safety card": <BiCard></BiCard>,
  "Bathtub": <MdBathtub></MdBathtub>,
  "Private bathroom":<MdBathroom></MdBathroom>,
  "Ethernet connection":<FaEthernet></FaEthernet>,
  "EV charger":<GiElectricalSocket></GiElectricalSocket>,
  "BBQ grill":<GiBarbecue></GiBarbecue>,
  "Patio or balcony":<MdBalcony></MdBalcony>,
  "Garden or backyard":<GiGardeningShears></GiGardeningShears>
};

const Amenities = (props) => {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <h4>Offered Amenities</h4>

        <ul className="list-unstyled d-flex row mt-4">
          {props.offerAmenities.map((amenity) => {
            return (
              <li className="col-4 amenity">
                <span className="icon">{amenitiesIcons[amenity]}</span>
                <span>{amenity}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Amenities;
