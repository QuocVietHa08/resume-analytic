import React from 'react';
import BreadCumbs from '@/components/atoms/breadcumbs';
import IntroService from '../service/IntroService';
import styles from './styles.module.scss';

const Term = () => {
  return (
    <div className={styles.termConditionContainer}>
      <IntroService title="Term & Conditions" />
      <BreadCumbs pages={['Home', 'Term & Condtion']} />
      <div className={styles.termConditonContent}>
        <div>
          <p>Welcome to kungfuhelper.com!</p>
          <p>
            These terms and conditions outline the rules and regulations for the use of KungFu Helper’s Website, located at kungfuhelper.com
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use kungfuhelper.com if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
            “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions.
            “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client
            and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the
            above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and
            therefore as referring to same.
          </p>
        </div>

        <div className={styles.termSection}>Cookies</div>
        <div>
          <p>
            We employ the use of cookies. By accessing kungfuhelper.com, you agreed to use cookies in agreement with the KungFu Helper’s
            Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to
            enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising
            partners may also use cookies.
          </p>
        </div>

        <div className={styles.termSection}>License</div>
        <p>
          Unless otherwise stated, KungFu Helper and/or its licensors own the intellectual property rights for all material on
          kungfuhelper.com. All intellectual property rights are reserved. You may access this from kungfuhelper.com for your own personal
          use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from kungfuhelper.com</li>
          <li>Sell, rent or sub-license material from kungfuhelper.com</li>
          <li>Reproduce, duplicate or copy material from kungfuhelper.com</li>
          <li>Redistribute content from kungfuhelper.com</li>
          <li>This Agreement shall begin on the date hereof. </li>
        </ul>
        <p>
          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the
          website. KungFu Helper does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not
          reflect the views and opinions of KungFu Helper,its agents and/or affiliates. Comments reflect the views and opinions of the
          person who post their views and opinions. To the extent permitted by applicable laws, KungFu Helper shall not be liable for the
          Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or
          appearance of the Comments on this website.
        </p>
        <p>
          KungFu Helper reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate,
          offensive or causes breach of these Terms and Conditions.
        </p>
        <p>You warrant and represent that:</p>
        <ul>
          <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
          <li>
            The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any
            third party;
          </li>
          <li>
            The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of
            privacy
          </li>
          <li>
            The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
          </li>
          <li>
            You hereby grant KungFu Helper a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit
            any of your Comments in any and all forms, formats or media.
          </li>
        </ul>

        <div className={styles.termSection}>Hyperlinking to our Content</div>
        <p>The following organizations may link to our Website without prior written approval:</p>
        <ul>
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>
            Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed
            businesses; and
          </li>
          <li>
            System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site.
          </li>
          <li>
            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not
            in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products
            and/or services; and (c) fits within the context of the linking party’s site.
          </li>
        </ul>
        <p>We may consider and approve other link requests from the following types of organizations:</p>
        <ul>
          <li>commonly-known consumer and/or business information sources;</li>
          <li>dot.com community sites;</li>
          <li>associations or other groups representing charities;</li>
          <li>online directory distributors;</li>
          <li>internet portals;</li>
          <li>accounting, law and consulting firms; and</li>
          <li>educational institutions and trade associations.</li>
        </ul>
        <p>
          We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to
          ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us
          from the visibility of the hyperlink compensates the absence of KungFu Helper; and (d) the link is in the context of general
          resource information.
        </p>
        <p>
          These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply
          sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the
          linking party’s site.
        </p>
        <p>
          If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us
          by sending an e-mail to KungFu Helper. Please include your name, your organization name, contact information as well as the URL of
          your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would
          like to link. Wait 2-3 weeks for a response.
        </p>

        <p>Approved organizations may hyperlink to our Website as follows:</p>

        <ul>
          <li>By use of our corporate name; or</li>
          <li>By use of the uniform resource locator being linked to; or</li>
          <li>
            By use of any other description of our Website being linked to that makes sense within the context and format of content on the
            linking party’s site.
          </li>
          <li>No use of KungFu Helper logo or other artwork will be allowed for linking absent a trademark license agreement.</li>
        </ul>
      </div>
    </div>
  );
};

export default Term;
