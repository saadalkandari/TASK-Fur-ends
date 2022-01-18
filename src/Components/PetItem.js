import{useState} from "react";
export default function PetItem({pet}) {
  //const pet = props.pet;
  const [petImage, setImage] = useState(pet.image);
  const changePetImage = () =>{
    setImage(pet.image2);
  }
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button type="button" class="btn btn-info" onClick={changePetImage}>
            Pet
          </button>
        </div>
      </div>
    </div>
  );
}
