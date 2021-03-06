import RinMain from "../res/chars/rin/normal.png"
import RinAngry from "../res/chars/rin/angry.png"
import RinHappy from "../res/chars/rin/happy.png"

import markAngry from "../res/chars/mark/angry.webp"
import markHappy from "../res/chars/mark/happy.webp"
import markMain from "../res/chars/mark/main.webp"
import markShy from "../res/chars/mark/shy.webp"
import markSurprised from "../res/chars/mark/surprised.webp"
import markThink from "../res/chars/mark/think.webp"

import simnaMain from "../res/chars/simna/main.webp"

import stickMain from "../res/chars/stick/main.webp"

import archivistMain from "../res/chars/archivist/main.webp"

import hostessMain from "../res/chars/hostess/main.webp"

import {dataRawCharI} from "../game/interfaces/interfaces";


const data: dataRawCharI = {
    Player: {
        id: "player",
        name: "Исследователь",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {}
    },
    Setting: {
        id: "setting",
        name: "Окружение",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {}
    },
    Hostess: {
        id: "hostess",
        unknown: "Хозяйка таверны",
        name: "Аска",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            main: hostessMain
        }
    },
    Mark: {
        id: "mark",
        name: "Марк",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            angry: markAngry,
            happy: markHappy,
            main: markMain,
            shy: markShy,
            surprised: markSurprised,
            think: markThink
        }
    },
    Simna: {
        id: "simna",
        name: "Симна",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            main: simnaMain
        }
    },
    Archivist: {
        id: "archivist",
        name: "Главный архивариус",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            main: archivistMain
        }
    },
    Stick: {
        id: "stick",
        name: "Стик",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            main: stickMain
        }
    },
    Strangers: {
        id: "strangers",
        name: "Незнакомцы",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {}
    }
}

export default data