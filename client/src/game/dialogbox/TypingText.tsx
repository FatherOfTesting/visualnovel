import {FC, useEffect, useState} from "react";
import StoreStory from "../mobX/stores/StoreStory";
import getIntervalTimeBySymbol from "../functions/getIntervalTimeBySymbol";
import StoreSettings from "../mobX/stores/StoreSettings";

//Написать пропсы
interface TypingProps {
    text: string
}

//timer хранит в себе все props
const TypingText: FC<TypingProps> = ({text}) => {
    const [typeText, setTypeText] = useState<string>("")
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        StoreStory.setComplete(false)
        setTypeText("")
        setIndex(0)
    }, [text])

    useEffect(() => {
        if ((typeText.length < text.length || typeText !== text) && text !== "" && !StoreSettings.getMomentPrinting()) {
            if (!!text[index]) {
                const interval = getIntervalTimeBySymbol(text[index - 1])
                setTimeout(() => {
                    setTypeText(typeText => typeText += text[index])
                    setIndex(index => index += 1)
                }, interval)
            }
        } else {
            // debugger
            setIndex(0)
            setTypeText(text)
            StoreStory.setComplete(true)
        }
    }, [text, index])

    useEffect(() => {
        if (StoreStory.getComplete()) {
            setTypeText(text)
        }
    }, [StoreStory.getComplete()])

    return (
        <>
            {typeText}
        </>
    )
}

export default TypingText