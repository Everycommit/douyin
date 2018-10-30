import '../../mock/mock.js';
import axios from 'axios';

const state={
    data:{}
}
const getters={

}
const mutations={
    resdata(state,payload){
        state.data=payload.data
    },
    operationdata(state,payload){
        // console.log(payload)
        if(payload.ids==state.data.id){
            if(payload.add){
                state.data.like+=1;
            }else{
                state.data.like-=1;
            }
        }
        console.log(state)
        // state.indexdatalists=arr
    },
    requestdata(state,payload){
        if(payload.id==state.data.id){
            state.data.msg.unshift({
                "icon":"",
                "name":"hehe",
                "txt":payload.val,
                "date":"",
                "dianzan":"100"
            })
        }
        // console.log(payload)
    }
}
const actions={
    getdata({commit}){
        axios.get('/home').then(res=>{
            console.log(res.data,'首次')
            commit('resdata',res)
        })
    },
    dianzan({commit},payload){
        commit('operationdata',payload)
    },
    pinglun({commit},payload){
        commit('requestdata',payload)
    }
}
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}