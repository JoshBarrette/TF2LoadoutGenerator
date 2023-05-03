import './WeaponCard.css';

// type WeaponProps = {
//     name: string,
//     image: string
//     show: boolean
// } 

function WeaponCard(props: {
    name: string,
    image: string
    show: boolean
}) {
    return(
        <div id="Container" hidden={!props.show}>
            <img src={props.image}/>
            <div id = "TextDiv">
                <h3 id="Text">{props.name}</h3>
            </div>
        </div>
    );
}


export default WeaponCard;