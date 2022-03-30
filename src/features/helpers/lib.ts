import {useIsTrue} from "shared/lib";

export const useIsLoading = (defaultValue?: boolean) => {
    const {setTrue, isTrue, setFalse, toggle} = useIsTrue(defaultValue)

    return {
        isLoading: isTrue,
        startLoading: setTrue,
        finishLoading: setFalse,
        toggleLoading: toggle
    }
}