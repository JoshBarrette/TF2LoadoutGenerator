import './WeaponCard.css';

function WeaponCard(props: {
    name: string,
    image: string
    show?: boolean
}) {
    let show = props.show;
    if (show === undefined) {
        show = true;
    }
    
    return(
        <div id="Container" hidden={!show}>
            <img src={props.image} alt=''/>
            <div id = "TextDiv">
                <h3 id="Text">{props.name}</h3>
            </div>
        </div>
    );
}


export default WeaponCard;