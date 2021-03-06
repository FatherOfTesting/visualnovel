import {useEffect} from "react";
import {load} from "../interfaces/enums";
import parseImagesEnum from "../functions/parseImagesEnum";
import StoreGame from "../mobX/stores/StoreGame";


const useImagesOnLoad = (paths: string[]) => {

    const {setImagesLoad} = StoreGame

    const loadImage = (path: string) =>
        new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve(path)
            img.onerror = () => reject()

            img.src = path
        })

    const allPromises = (paths: string[]) => {
        setImagesLoad(load.LOADING)
        return paths.map(path => loadImage(path))
    }

    useEffect(() => {
        const parsedPaths = parseImagesEnum(paths)

        Promise.all(allPromises(parsedPaths)).then((message) => {
            // console.log(message);
            setImagesLoad(load.COMPLETE)
        }, reason => {
            // console.log(reason)
            setImagesLoad(load.ERROR)
        })
    }, [paths])
}

export default useImagesOnLoad