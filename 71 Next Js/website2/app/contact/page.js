import React from 'react'
import Script from 'next/script'
const contact = () => {
    return (
        <div>

            <Script>
                {` alert("Welcome to contact"); `}
            </Script>

            I am a contact
        </div>
    )
}

export default contact
export const metadata = {
    title: "Contact Facebook",
    description: "This is facebook",
};