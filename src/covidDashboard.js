import React from 'react';
import axios from 'axios';

const API_HOST = 'http://corona.lmao.ninja/v2';

const ENDPOINTS = [

    {
        id:'all',
        path:'/all',
        isDefault: true

    },

    {
        id:'countries',
        path:'/countries'
    }
]

const defaultState = {
    data:null,
    state:'ready'
}

function covidDashboard(){

    return(






    );
}

export default covidDashboard;