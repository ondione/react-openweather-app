import { createSlice , PayloadAction , createSelector} from "@reduxjs/toolkit";
import { WeatherType } from "../../types/weatherType";
import { RootState } from '../../app/store'

export interface histdata  {
    ville:string,
    data:WeatherType
}

export interface historyState{
    history:Array<histdata>,
    isLoaded: boolean
}

export const historyState = {
    history:[],
    isLoaded: false
};

export const historySlice = createSlice({
    name:'history',
    initialState: historyState,
    reducers:{
        addHistory: (state, action:PayloadAction<histdata>):any => {
            return { 
                ...state, 
                history: [
                    ...state.history, action.payload
                ],
                isLoaded :true
            };
        }
    }
});

export const selectHistory = (state:RootState) => state.history.history;
export const selectHistoryByTown = createSelector(
    [ 
        selectHistory, 
        (state, ville) => ville
    ],
	(allHistory, ville) => {
        return allHistory.filter( (item:histdata) => { 
            return item.ville === ville 
<<<<<<< Updated upstream
        })
=======
        })[0]
>>>>>>> Stashed changes
    }
);


export const { addHistory} = historySlice.actions;
export default historySlice.reducer;