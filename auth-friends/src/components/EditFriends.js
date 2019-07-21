import React from 'react'

const EditFriends = () => {
    return (
        <div>
            <Form>
        <div className="input-group">
            <div className="login-group" >
               {touched.name && errors.name && <p>{errors.username}</p>}
               <label htmlFor="username">Username: </label>
                <Field 
                    type="text"
                    name="username"
                    placeholder="Username" 
                    
                />
            </div>
            <div className="login-group">
            {touched.password && errors.password && <p>{errors.password}</p>}
                <label htmlFor="password">Password: </label>
                <Field 
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Password"
                
                />
            </div>
        </div>
        <div>
                {isSubmitting && <p>Loading...</p>}
            <button
                disabled={isSubmitting}
                className="submit-button"
                type="submit"
            >
                Submit &rarr;
            </button>
        </div>
        </Form>
        </div>
    )
}
export default EditFriends;