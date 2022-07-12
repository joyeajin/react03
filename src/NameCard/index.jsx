import React from 'react';
import './css/index.css';
import nameData from './../data/nameData.json';


const NameCard = () => {
    const nameList = nameData;
    return (
        <div className='inner'>
            <ul>
                {
                    nameData.map((names)=>{
                        return(
                            <li className='name-list' key={names.id}>
                                <span>id : {names.id}</span>
                                <span>name : {names.name}</span>
                                <span>tel : {names.tel}</span>
                                <span>nickname : {names.nickname}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default NameCard;