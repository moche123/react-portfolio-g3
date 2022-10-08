import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'ok',
    skills: [
        {id:0,value:'frontend',count:0},
        {id:1,value:'backend',count:0},
        {id:2,value:'database',count:0},
        {id:3,value:'devops',count: 0}
    ]
}

export const votationSlice = createSlice({
    name: 'votation',
    initialState,
    reducers: {
        voteSkill: (state,action) => {
            state.skills.forEach((el) => {
                if (el.id === action.payload) el.count++
            })
        }
        /*
            state.skills.map (el => {
                el.id === action.payload ? {...el,count++} : el
            })
        
        */
    }
})

export const { voteSkill } = votationSlice.actions


export default votationSlice.reducer