import React from 'react';


//------------------------Header HTML Structure-------------------------//
function Header() { 
    return (
    <header>
        <nav>
        <a href='#' className='logo'>
            <img id='logo__img' src={require('../img/logo.png')}></img>
            {/* React won't render a local image unless the syntax is as above. require() is a Node.js alternative to import. Both are virtually the same. I chose to use require() in order to keep my syntax clean */}
        </a>  
        <input type="text" placeholder="Search.."></input>
        <ul>
            <li>
                <a>
                    <img src={require('../img/home.png')}></img>
                </a>
            </li>
            <li>
                <a>
                    <img src={require('../img/message.png')}></img>
                </a>
            </li>
            <li>
                <a>
                    <img src={require('../img/explore.webp')}></img>
                </a>
            </li>
            <li>
                <a>
                    <img src={require('../img/notifications.png')}></img>
                </a>
            </li>
            <li>
                <a>
                
                </a>
            </li>
        </ul>
        </nav>
    </header>
    )
}

export {Header}