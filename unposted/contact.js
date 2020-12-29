import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ContactForm from '../components/ContactForm.js'

const c1 = '#071013', c2 = '#fffecb', c3 = '#20a4f3',  c4 = '#1d2b35', c5 = '#fb232e', c6 = '#ffaa33';

const about_heading = c3, about_meta_info = c4, about_meta_icon = c4, display_img_border = c4;
const about_info = c1 + 'd9', external_link = c1, external_link_border = c5, external_link_hover = c3;
const horizontal_break = c1 + '80', portfolio_section_heading = c3, organization_name = c5, role_buffer_dot = c1;
const role_name = c4, role_duration = c1 + 'bf', tech_stack_group_heading = c5, tech_stack_icon = c4, tech_stack_name = c4;
const contact_info = c4, mailto = c3;

const styles = `
  .contact-form-container {
    display: flex;
    flex-direction: column;
    width: 50vw;
    max-width: 50vw;
    margin: 5vh 10vw 0 10vw;
  }

  .contact-info {
    color: ${contact_info};
    font-family: 'Maven Pro', sans-serif;
    font-size: calc(1rem + 0.1vw);
  }

  .mailto-link {
    color: ${mailto};
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 920px) {
    .contact-form-container {
      width: 90vw;
      max-width: 90vw;
      margin: 2vh 5vw 0vw 5vw;
    }
  }
`

const home_page_url = 'https://santhalakshminarayana.github.io/';
const description = "Contact me here";

export default function Contact_Page(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <meta name = 'description' content = {description} />
        <meta name="author" content="Santha Lakshmi Narayana" />
        <link rel = 'icon' href = '/images/santha lakshmi narayana logo.png?' />

        <meta property="og:title" content={'About'} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={home_page_url + 'about'} key="ogurl" />
        <meta property="og:image" content={home_page_url + 'images/santha-lakshmi-narayana.png'} key="ogimage" />
        <meta property="og:type" content="article" />
        <meta property='og:article:publisher' content={home_page_url} key='ogaritclepublisher'/>
        <meta property="og:site_name" content={"Santha Lakshmi Narayana"} key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Santha Lakshmi Narayana'} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={home_page_url + 'about'} />
        <meta name="twitter:site" content="@santhalakshminarayana" />
        <meta name="twitter:image" content={home_page_url + 'images/santha-lakshmi-narayana.png'} />
        <meta name="twitter:creator" content='@santhalakshminarayana' />

        <title>{'Contact'}</title>

        <style type = 'text/css'>{styles}</style>
      </Head>
      
      <div>
        <Header />

        <div className = 'contact-form-container'>
          <p className = 'contact-info'>Thank you showing for interest to contact me. You can reach me by filling 
            little details below</p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}