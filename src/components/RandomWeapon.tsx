import React from 'react';
import './RandomWeapon.css';
import WeaponCard from './WeaponCard';

import scout from './WeaponLists/Scout.json';
import spy from './WeaponLists/Spy.json';

type State = {
    primaryIndex: number,
    secondaryIndex: number,
    meleeIndex: number,
    watchIndex: number,
    fourthImage: boolean,
    classNum: number
};

type weapon = {
    name: string,
    image: string
}
var primaries: Array<weapon> = scout.primaries;
var secondaries: Array<weapon> = scout.secondaries;
var melees: Array<weapon> = scout.melees;
const watches: Array<weapon> = spy.watches;

const classes: Array<string> = ["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"];

class RandomWeapon extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            primaryIndex: 0,
            secondaryIndex: 0,
            meleeIndex: 0,
            watchIndex: 0,
            fourthImage: false,
            classNum: 1
        }
    } 

    changePrimary = () => {        
        let num = this.state.primaryIndex + 1;
        if (num > primaries.length - 1) {
            num = 0;
        }
        this.setState({
            primaryIndex: Math.floor(Math.random() * primaries.length),
            secondaryIndex: Math.floor(Math.random() * secondaries.length),
            meleeIndex: Math.floor(Math.random() * melees.length),
            watchIndex: Math.floor(Math.random() * watches.length)
        });
    }

    randomClass = () => {
        this.changeClass(Math.floor(Math.random() * 9) + 1);
    }

    changeClass = (newClassNum: number) => {
        if (newClassNum == this.state.classNum) {
            return;
        } else if (newClassNum == 9) {
            this.setState({
                fourthImage: true
            });
        } else {
            this.setState({
                fourthImage: false
            });
        }

        this.setState({
            classNum: newClassNum,
            primaryIndex: 0,
            secondaryIndex: 0,
            meleeIndex: 0,
            watchIndex: 0
        });

        let newClass = require(`./WeaponLists/${classes[newClassNum - 1]}.json`);
        primaries = newClass.primaries;
        secondaries = newClass.secondaries;
        melees = newClass.melees;
    }

    render() {
        return(
            <div id="MainDiv">                
                <div id="ClassButtonsDiv">
                    <button onClick={() => this.changeClass(1)}>Scout</button>
                    <button onClick={() => this.changeClass(2)}>Soldier</button>
                    <button onClick={() => this.changeClass(3)}>Pyro</button>
                    <button onClick={() => this.changeClass(4)}>Demoman</button>
                    <button onClick={() => this.changeClass(5)}>Heavy</button>
                    <button onClick={() => this.changeClass(6)}>Engineer</button>
                    <button onClick={() => this.changeClass(7)}>Medic</button>
                    <button onClick={() => this.changeClass(8)}>Sniper</button>
                    <button onClick={() => this.changeClass(9)}>Spy</button>
                    <button onClick={this.randomClass}>Random Class</button>
                </div>

                <div id="CardsDiv">
                    <WeaponCard name={primaries[this.state.primaryIndex].name} image={primaries[this.state.primaryIndex].image} show={true} />
                    <WeaponCard name={secondaries[this.state.secondaryIndex].name} image={secondaries[this.state.secondaryIndex].image} show={true} />
                    <WeaponCard name={melees[this.state.meleeIndex].name} image={melees[this.state.meleeIndex].image} show={true} />
                    <WeaponCard name={watches[this.state.watchIndex].name} image={watches[this.state.watchIndex].image} show={this.state.fourthImage} />
                </div>

                <div id="RandomizeButtonDiv">
                    <button id="RandomizeButton" onClick={this.changePrimary}>Randomize</button>
                </div>
            </div>
        )
    }
}

export default RandomWeapon;