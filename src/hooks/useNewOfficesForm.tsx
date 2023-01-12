import { useReducer } from "react"
import { ConsultorioCreate } from "../codegen_output"

interface FormState {
    inputValues: ConsultorioCreate
}

const INITIAL_STATE = {
    sala: 20,
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const newOfficeReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const { inputName, inputValue } = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }

        case "clear":
            return INITIAL_STATE

        default:
            return state
    }
}

const useNewOfficeForm = () => {
    return useReducer(newOfficeReducer, INITIAL_STATE)
}

export default useNewOfficeForm 