import React from 'react'

const UserCard = (props) => {
    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'>Frank Jordan</div>
                    <div className='description'>
                        {props.children}
                    </div>
            </div>
            <div className='ui bottom button'>
                <i className='add icon'></i>
                <a href="fb.com">Add friend</a>
            </div>
        </div>
    )
}

export default UserCard;