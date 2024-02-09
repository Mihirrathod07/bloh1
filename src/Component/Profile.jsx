import React from 'react';
import { useState } from 'react';
function Profile()
{
    const [loggedIn,setLoggedIn]=useState(3)
    return(
        <div>
           {loggedIn==1?
           <h1>Welcome Mihir</h1>
           :loggedIn==2?<h1>welcome USer2</h1>
           :<h1>welcome USer3 </h1>}
        </div>
    )
}

export default Profile;