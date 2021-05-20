import React, { useContext, useEffect, useRef, useState } from 'react';

import SEO from '../components/seo';

import { useForm, ValidationError } from '@formspree/react';

import Footer from '../components/footer/Footer';


import './get-in-touch.scss';

import { topnavColorContext } from '../../provider';

const ContactForm = () => {
    const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_CONTACT_FORM_TOKEN);
    const [isNotOnUniversalCredit, setIsNotOnUniversalCredit] = useState(false);
    const [universalCreditSelected, setUniversalCreditSelected] = useState(false);

    function listenToInput(e) {
        if (e.target.value === 'universal_credit_no' && e.target.checked) {
            setIsNotOnUniversalCredit(true);
            setUniversalCreditSelected(false);
        } else {
            setIsNotOnUniversalCredit(false);
            setUniversalCreditSelected(true);
        }
    } 


    if (state.succeeded) {
        return (
          <div
            className="successDiv"
        >
            Thank you, we will contact you soon!
        </div>
        );
    }
    return (
        <>
        <div
          className="leadDiv"
        >
            Fill in the form below and a member of our team will be in touch with you shortly.
        </div>
        <form 
            onSubmit={handleSubmit} 
            className="getInTouchPage__form"
        >
          <input
            id="name"
            type="text" 
            name="name"
            placeholder="Name"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="Email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <input
            id="phone"
            type="phone" 
            name="phone"
            placeholder="Phone number"
            required
          />
          <ValidationError 
            prefix="Phone number" 
            field="phone"
            errors={state.errors}
          />
          <div
            className="getInTouchPage__form__radioBtnContainer"
          >
            <div
                className="radioBtnContainer__heading"
            >
                Are you on Universal Credit?
            </div>
            <div
                className="radioBtnContainer__item"
            >
                <label
                    htmlFor="universal_credit_yes"
                >
                    <input
                        type="radio"
                        id="universal_credit_yes"
                        value="universal_credit_yes"
                        name="universal_credit"
                        onChange={listenToInput}
                    />
                    Yes
                    <span 
                        className="checkmark"
                    />
                </label>
            </div>
            <div
                className="radioBtnContainer__item"
            >
                <label
                    htmlFor="universal_credit_no"
                >
                    No
                    <input
                        type="radio"
                        id="universal_credit_no"
                        value="universal_credit_no"
                        name="universal_credit"
                        onChange={listenToInput}
                    />
                    <span 
                        className="checkmark"
                    />
                </label>
            </div>
            <div
                className="radioBtnContainer__item"
            >
                <label
                    htmlFor="universal_credit_goingTo"
                >
                    I'm going to be
                    <input
                        type="radio"
                        id="universal_credit_goingTo"
                        value="universal_credit_goingTo"
                        name="universal_credit"
                        onChange={listenToInput}
                    />
                    <span 
                        className="checkmark"
                    />
                </label>
            </div>
          </div>
          <ValidationError 
            prefix="Universal credit" 
            field="universal_credit"
            errors={state.errors}
          />
          <div
            className="getInTouchPage__form__submitContainer"
          >
            <button 
                type="submit" 
                disabled={state.submitting || isNotOnUniversalCredit || !universalCreditSelected}
            >
                Submit
            </button>
            <div
                className={`
                    getInTouchPage__form__notQualified
                    ${ isNotOnUniversalCredit 
                        ?
                        'getInTouchPage__form__notQualified--visible'
                        :
                        ''
                    }
                `}
            >
                Unfortunately you do not qualify for the Kickstarter scheme. For details why please click <a target="blank" href="https://liiift.co.uk/blog/kickstart-scheme">here</a>
            </div>
          </div>
        </form>
        <div
            className="contactPage__bottomDiv"
        >
            To find out more click <a target="blank" href="https://liiift.co.uk/blog/kickstart-scheme">here</a>
        </div>
      </>
    );
  }

const GetInTouchPage = ({

}) => {
    const { changeColor, changeMainColor } = useContext(topnavColorContext);

    useEffect(() => {
        changeMainColor('#FFFFFF');
        changeColor('#FFFFFF');
    }, []);
    

    return (
        <>
        <SEO 
            title="Contact us" 
            description={`Find out what roles could be a good match for you`}
        />
        <div
            className="getInTouchPage__container"
        >
            <section
                className={`getInTouchPage__mainSection`}
            >
                <div
                    className={`pageContent__header`}
                >
                    Interested in finding out what roles could be a good match for you?
                </div>
                <div
                    className="contactPage__formDiv"
                >
                    <ContactForm />
                </div>
            </section>
        </div>
        <Footer 
            customCtaDiv={true}
        />
        </>
    );
}

export default GetInTouchPage;