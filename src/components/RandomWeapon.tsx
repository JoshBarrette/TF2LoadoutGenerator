import React from 'react';
import './RandomWeapon.css';
import WeaponCard from './WeaponCard';

import scout from './WeaponLists/Scout.json';
import spy from './WeaponLists/Spy.json';

type weapon = {
    name: string,
    image: string
}
var primaries: Array<weapon> = scout.primaries;
var secondaries: Array<weapon> = scout.secondaries;
var melees: Array<weapon> = scout.melees;
const watches: Array<weapon> = spy.watches;

const classes: Array<string> = ["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"];

function RandomWeapon() {
    const [primaryIndex, setPrimaryIndex] = React.useState(0);
    const [secondaryIndex, setSecondaryIndex] = React.useState(0);
    const [meleeIndex, setMeleeIndex] = React.useState(0);
    const [watchIndex, setWatchIndex] = React.useState(0);
    const [fourthImage, setFourthImage] = React.useState(false);
    const [classNum, setClassNum] = React.useState(0);

    const changePrimary = () => {
        let num = primaryIndex + 1;
        if (num > primaries.length - 1) {
            num = 0;
        }
        setPrimaryIndex(Math.floor(Math.random() * primaries.length));
        setSecondaryIndex(Math.floor(Math.random() * secondaries.length));
        setMeleeIndex(Math.floor(Math.random() * melees.length));
        setWatchIndex(Math.floor(Math.random() * watches.length));
    }

    const randomClass = () => {
        changeClass(Math.floor(Math.random() * 9) + 1);
    }

    const changeClass = (newClassNum: number) => {
        if (newClassNum == classNum) {
            return;
        } else if (newClassNum == 9) {
            setFourthImage(true);
        } else {
            setFourthImage(false);
        }

        setClassNum(newClassNum);
        setPrimaryIndex(0);
        setSecondaryIndex(0);
        setMeleeIndex(0);
        setWatchIndex(0);

        let newClass = require(`./WeaponLists/${classes[newClassNum - 1]}.json`);
        primaries = newClass.primaries;
        secondaries = newClass.secondaries;
        melees = newClass.melees;
    }

    return (
        <div id="MainDiv">
            <div id="ClassButtonsDiv">
                <button onClick={() => changeClass(1)}>Scout</button>
                <button onClick={() => changeClass(2)}>Soldier</button>
                <button onClick={() => changeClass(3)}>Pyro</button>
                <button onClick={() => changeClass(4)}>Demoman</button>
                <button onClick={() => changeClass(5)}>Heavy</button>
                <button onClick={() => changeClass(6)}>Engineer</button>
                <button onClick={() => changeClass(7)}>Medic</button>
                <button onClick={() => changeClass(8)}>Sniper</button>
                <button onClick={() => changeClass(9)}>Spy</button>
                <button onClick={randomClass}>Random Class</button>
            </div>

            <div id="CardsDiv">
                <WeaponCard name={primaries[primaryIndex].name} image={primaries[primaryIndex].image} />
                <WeaponCard name={secondaries[secondaryIndex].name} image={secondaries[secondaryIndex].image} />
                <WeaponCard name={melees[meleeIndex].name} image={melees[meleeIndex].image} />
                <WeaponCard name={watches[watchIndex].name} image={watches[watchIndex].image} show={fourthImage} />
            </div>

            <div id="RandomizeButtonDiv">
                <button id="RandomizeButton" onClick={changePrimary}>Randomize</button>
            </div>
        </div>
    )
}

export default RandomWeapon;