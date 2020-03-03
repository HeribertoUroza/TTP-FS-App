import React from 'react';

function PortfolioInfo(props) {
    const noData = <>
        <h1 className='no-data'>Start Buying Stocks On The Right. <br /><br />
        Search By The Companies Ticker
        </h1>
    </>

    const data = <>
        <br />
        <br />
        <h3 className='p-title-h3'><span className='title-s'>NAME</span><span className='title-s' >TICKER</span><span className='title-s' >QUANTITY</span><span className='title-s' >PRICE</span></h3>
        <ul className='pi-ul'>
        
        {
            props.data.map((e,i) => {
                    return <li className='pi-li' key={i} ><span className='info'>{e.name}</span><span className='info' >{e.ticker}</span><span className='info' >{e.quantity}</span><span className='info' >${e.current_value}</span></li>
                })
        }
        </ul>
    </>

    return(
        !props.data.name ? noData : data 
    )
}

export default PortfolioInfo;