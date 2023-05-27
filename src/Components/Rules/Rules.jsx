import React from 'react';
import Contact from '../Contact/Contact';

const Rules = () => {
    return (
        <div className='mt-5 ms-4'>
            <h1 className='bg-danger text-light text-center rounded-pill'>Terms And Condation</h1>
            <h4>Our list of Terms of Use templates and the Terms of Use Generator has been updated in May</h4>

            <p>You can use the list of templates to learn more about the best practices and clauses your Terms of Use agreement may need to have. While this kind of legal page isn't mandatory by any laws, it's a good practice to have it.</p>

            <p>In a Terms of Use, you write the guidelines that users of your website/mobile app must follow in order to use your website/mobile app. In they do not follow the rules you set, you can reserve the right to terminate their accounts, their access etc.</p>

            <p>You can use the Terms of Use Generator to create this kind of legal page simply by entering a few information about your website. You can download the agreement in HTML and Text formats.</p>
        <Contact/>
        </div>
    );
};

export default Rules;