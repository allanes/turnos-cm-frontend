import { useReducer } from "react"
import { RegistroConsultoriosCreate } from "../codegen_output"

interface FormState {
    inputValues: RegistroConsultoriosCreate
}

const INITIAL_STATE = {
    id_consultorio: 0,
    id_medico: 0
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

const newAssignReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
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

const useNewAssignDoctorToOffice = () => {
    return useReducer(newAssignReducer, INITIAL_STATE)
}

export default useNewAssignDoctorToOffice 