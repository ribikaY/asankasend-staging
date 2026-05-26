"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "../../public/styles/privacy-policy.css";

function PrivacyPolicyDocument() {
  return (
    <div className="wrap">
      <header>
        <div>
          <h1 id="title">{"Privacy Policy"}</h1>

          <div className="meta">
            {"\n            Effective Date: "}
            <strong className="sm:hidden">{"Sep 2024"}</strong>
            <strong className="hidden sm:inline-flex">{"September 2024"}</strong>
            {" \u2022 Version "}
            <strong>{"1"}</strong>
          </div>

        </div>
      </header>

      <main>
        <p>
          {"This Privacy Policy explains how we collect, store, use, share and process your personal data when you use our website, services or mobile application (the "}
          <strong>{"\"App\""}</strong>
          {"). It also describes the rights you have over your personal data."}
        </p>

        <p>
          {"Personal data means any information about an identified or identifiable individual. It does not include anonymous data, which cannot be linked back to an individual."}
        </p>

        {/* Section 1 */}

        <section className="section" id="section-1">
          <h2>{"1. About us"}</h2>

          <p>
            {"\"Asanka Send\", "}
            <strong>{"\"we\""}</strong>
            {", "}
            <strong>{"\"our\""}</strong>
            {" or "}
            <strong>{"\"us\""}</strong>
            {" means the responsible Asanka Send entity. They are known as the 'controller' of your personal data. "}
            <strong>{"\"You\""}</strong>
            {" means any visitor to our website or App or user of our Services."}
          </p>

          <p>
            {"This is a global Privacy Policy, which means that it applies to Asanka Send customers and their personal data in all the regions and countries. Throughout this policy we refer to data protection legislation, but the legislation that is applicable to you will depend on which Asanka Send entity provides Services to you. The data protection legislation applicable to the Asanka Send entities includes (but is not limited to) the UK General Data Protection Regulation, EU General Data Protection Regulation, Dubai DIFC Data Protection Law 2020, UK Privacy Electronic Communication Regulation 2011, EU e-Privacy legislation, and other applicable data protection laws."}
          </p>
        </section>
      
      {/* Section 2 */}
      
      <section className="section" id="section-2">
        
        <h2>
          {"2. How to contact us about your privacy and data protection"}
        </h2>
        
        <p>
          {"You can contact us about your privacy, to exercise your data rights and for information about how we use, process, store and protect your personal data by emailing us at "}
          <a href="mailto:info@asankasend.com" style={{ color: "var(--privacy-policy-accent)", textDecoration: "none", fontWeight: "600" }}>
            {"info@asankasend.com"}
          </a>
          {"."}
        </p>
        
      </section>
      
      {/* Section 3 */}
      
      <section className="section" id="section-3">
        
        <h2>
          {"3. Types of personal data we collect and how we get it"}
        </h2>
        
        <p>
          {"Most of the personal data we process is provided to us directly by you. This sets out the information we collect and process, and where we get it from. The collection and use of data is crucial to providing our Services and keeping the Services safe. Data helps us increase the safety of your online payments, while reducing the risk of fraud, money laundering and other harmful activity."}
        </p>
        
        <table className="data-table">
          
          <thead>
            
            <tr>
              
              <th>
                {"Information we collect"}
              </th>
              
              <th>
                {"Types of data collected"}
              </th>
              
            </tr>
            
          </thead>
          
          <tbody>
            
            <tr>
              
              <td>
                
                <strong>
                  {"Information we collect when you:"}
                </strong>
                
                <ul>
                  
                  <li>
                    {"register for the App;"}
                  </li>
                  
                  <li>
                    {"use our Services;"}
                  </li>
                  
                  <li>
                    {"fill your details and transaction details;"}
                  </li>
                  
                  <li>
                    {"correspond with us;"}
                  </li>
                  
                  <li>
                    {"respond to any of our Services;"}
                  </li>
                  
                  <li>
                    {"take part in online discussions;"}
                  </li>
                  
                  <li>
                    {"speak with a member of our team or use a chat-bot;"}
                  </li>
                  
                  <li>
                    {"enter competitions; and/or"}
                  </li>
                  
                  <li>
                    {"contact us for other reasons."}
                  </li>
                  
                </ul>
                
              </td>
              
              <td>
                
                <ul>
                  
                  <li>
                    {"Name, address and date and place of birth"}
                  </li>
                  
                  <li>
                    {"E-mail address, phone number and details of the device you use (e.g. device ID)."}
                  </li>
                  
                  <li>
                    {"Income and occupation."}
                  </li>
                  
                  <li>
                    {"Proof of address."}
                  </li>
                  
                  <li>
                    {"Details and copies of your identification documents (for example passport or government ID) and your image to compare against these (either in photo or video form)."}
                  </li>
                  
                  <li>
                    {"Records of our discussions, if you contact us or we contact you (including records of phone calls and chat conversations)."}
                  </li>
                  
                  <li>
                    {"Your geographical location and IP address."}
                  </li>
                  
                  <li>
                    {"Your device settings (e.g. language preference, time zone)."}
                  </li>
                  
                  <li>
                    {"Information relating to your transaction (e.g. the person you are sending money to, payment reason)."}
                  </li>
                  
                  <li>
                    {"Information relating to how you pay us (e.g. encrypted card information and bank details)."}
                  </li>
                  
                  <li>
                    {"Credit reports and other consumer report information."}
                  </li>
                  
                </ul>
                
              </td>
              
            </tr>
            
            <tr>
              
              <td>
                
                <strong>
                  {"Information we collect when you use our Services on our App or website:"}
                </strong>
                
              </td>
              
              <td>
                
                <ul>
                  
                  <li>
                    {"Information on use of our products, including the date, time and amount of transfers, currencies and exchange rate used, beneficiary details, your IP address, messages sent or received, details of device used to make payment and the payment method used."}
                  </li>
                  
                  <li>
                    {"Technical information, including your IP address, login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform."}
                  </li>
                  
                  <li>
                    {"Information about your visit, including the full URL clickstream to, through and from our Website or App (including date and time); page response times, download errors, length of visits to certain pages, page interaction information, methods used to browse away from the page."}
                  </li>
                  
                </ul>
                
                <div className="optional-info">
                  
                  <strong>
                    {"Optional information:"}
                  </strong>
                  
                  <ul>
                    
                    <li>
                      {"If you turn on location services on or in the App, we receive information about your location using GPS technology."}
                    </li>
                    
                    <li>
                      {"If you give us access, information stored on your device like contact information from your contacts list."}
                    </li>
                    
                  </ul>
                  
                </div>
                
              </td>
              
            </tr>
            
            <tr>
              
              <td>
                
                <strong>
                  {"Information we collect from others:"}
                </strong>
                
              </td>
              
              <td>
                
                <ul>
                  
                  <li>
                    {"Information from your use of third-party applications, such as the Apple App Store or Google Play Store, social networking sites, such as name, your social network ID, location information, email, device ID, browser ID, and profile picture. Your use of third-party applications is subject to the privacy policy and terms of service for such applications."}
                  </li>
                  
                  <li>
                    {"Information from our service providers in destination countries, such as names associated with particular phone numbers."}
                  </li>
                  
                </ul>
                
              </td>
              
            </tr>
            
            <tr>
              
              <td>
                
                <strong>
                  {"Information we collect from social media:"}
                </strong>
                
              </td>
              
              <td>
                
                <ul>
                  
                  <li>
                    {"Occasionally, we'll use publicly available information about you from selected social media websites or apps to carry out enhanced due diligence checks (to comply with our anti-money laundering or sanctions screening obligations)."}
                  </li>
                  
                </ul>
                
              </td>
              
            </tr>
            
            <tr>
              
              <td>
                
                <strong>
                  {"Information from other public sources:"}
                </strong>
                
              </td>
              
              <td>
                
                <ul>
                  
                  <li>
                    {"We have a legal obligation to verify your identity as part of our anti-money laundering checks. To do this we collect information and contact details from publicly available sources, such as online registers or directories."}
                  </li>
                  
                </ul>
                
              </td>
              
            </tr>
            
          </tbody>
          
        </table>
        
        <p>
          {"Due to the Services we offer, we may process personal data of individuals other than App users, such as the recipients of payments or other individuals making enquiries or complaints."}
        </p>
        
      </section>
      
      {/* Section 4 */}
      
      <section className="section" id="section-4">
        
        <h2>
          {"4. Age requirement"}
        </h2>
        
        <p>
          {"Our Services are not designed for those under the age of 18. If we become aware of anyone using our Services who may be under 18, we will take all reasonable steps to ensure we do not process their data any further and will tell them this."}
        </p>
        
      </section>
      
      {/* Section 5 */}
      
      <section className="section" id="section-5">
        
        <h2>
          {"5. Sensitive personal data"}
        </h2>
        
        <p>
          {"In limited circumstances, we will also collect, process and store sensitive personal data to enable us to comply with our legal and regulatory obligations (e.g. biometric data to carry out anti-money laundering checks). Your jurisdiction may have rules that classify other information as sensitive. All sensitive information is subject to appropriate levels of protection."}
        </p>
        
      </section>
      
      {/* Section 6 */}
      
      <section className="section" id="section-6">
        
        <h2>
          {"6. Our legal basis for using your personal data"}
        </h2>
        
        <p>
          {"We must have a valid legal reason for using your personal data. The legal reasons we rely on are:"}
        </p>
        
        <table className="data-table">
          
          <thead>
            
            <tr>
              
              <th>
                {"Legal Basis"}
              </th>
              
              <th>
                {"Description"}
              </th>
              
            </tr>
            
          </thead>
          
          <tbody>
            
            <tr>
              
              <td>
                <strong>
                  {"Contractual obligations"}
                </strong>
              </td>
              
              <td>
                {"We need personal data to provide our Services and cannot provide them without it. We use personal data to enter into agreements with you and meet our contractual obligations. Where we process personal data that is special category data (i.e., biometric data or data which may reveal political opinions), we process it on the additional legal basis that such processing is necessary for substantial public interest reasons (e.g., to prevent or detect unlawful acts)."}
              </td>
              
            </tr>
            
            <tr>
              
              <td>
                <strong>
                  {"Legal obligations"}
                </strong>
              </td>
              
              <td>
                {"In some cases, we have a legal responsibility to collect and store your personal data (for example, for tax purposes or under anti-money laundering laws we must hold certain information about our customers)."}
              </td>
              
            </tr>
            
            <tr>
              
              <td>
                <strong>
                  {"Legitimate interests"}
                </strong>
              </td>
              
              <td>
                {"Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests;"}
              </td>
              
            </tr>
            
            <tr>
              
              <td>
                <strong>
                  {"Consent"}
                </strong>
              </td>
              
              <td>
                {"Where you have given us your consent to process your personal data."}
              </td>
              
            </tr>
            
          </tbody>
          
        </table>
        
        <p>
          {"You explicitly consent to us accessing, processing and retaining personal data for provision of payment services and electronic money services."}
        </p>
        
      </section>
      
      {/* Section 7 */}
      
      <section className="section" id="section-7">
        
        <h2>
          {"7. How we use your personal data"}
        </h2>
        
        <p>
          {"We use your personal data for a variety of reasons that we set out below."}
        </p>
        
        <h3>
          {"We use your data to provide our Services:"}
        </h3>
        
        <ul>
          
          <li>
            {"To fulfil agreements with you and to otherwise administer our relationship with you."}
          </li>
          
          <li>
            {"To process payments and prove transactions have been executed."}
          </li>
          
          <li>
            {"To process information about your contacts to make it easy for you to find and connect them and improve payment accuracy."}
          </li>
          
          <li>
            {"To administer profiles of users on our databases."}
          </li>
          
          <li>
            {"To provide you with customer support (we may record and monitor any communications between you and us, including phone calls, to maintain appropriate records, check your instructions, analyse, assess and improve our Services for quality and training purposes)."}
          </li>
          
          <li>
            {"To provide, maintain, personalise, optimise, and improve the Services, including research and analytics regarding use of the Services, or to remember you when you leave and return to the Services."}
          </li>
          
        </ul>
        
        <h3>
          {"We use your data to keep our Services up and running:"}
        </h3>
        
        <ul>
          
          <li>
            {"To monitor website and App usage, including to determine enhancements and technical improvements."}
          </li>
          
          <li>
            {"For customer analysis, to administer our Services, and for internal operations, for example troubleshooting, data analysis, testing, research and statistical purposes."}
          </li>
          
        </ul>
        
        <h3>
          {"We use your data to meet our legal obligations and enforce our rights:"}
        </h3>
        
        <ul>
          
          <li>
            {"To confirm your identity and verify your personal and contact details."}
          </li>
          
          <li>
            {"To comply with applicable laws, including anti-money laundering, counter terrorist financing and sanctions laws, including to verify your identity."}
          </li>
          
          <li>
            {"To establish, exercise or defend a legal claim."}
          </li>
          
          <li>
            {"To action any data subject right requests."}
          </li>
          
          <li>
            {"To meet our legal and regulatory obligations."}
          </li>
          
        </ul>
        
        <h3>
          {"We use your data to protect you and other users against fraud:"}
        </h3>
        
        <ul>
          
          <li>
            {"To detect, investigate and prevent activities which may be fraudulent or illegal, or which may misuse or Services or break our policies."}
          </li>
          
          <li>
            {"To comply with financial crime laws and to confirm that you're eligible to use our Services. We also use it to help us manage fraud risks related to your account."}
          </li>
          
        </ul>
        
        <h3>
          {"We use your data to communicate with you:"}
        </h3>
        
        <ul>
          
          <li>
            {"To communicate with you in relation to our Services, including to notify you of changes, seek your views or comments on our Services and to handle any enquiry or complaint you may have made."}
          </li>
          
        </ul>
        
        <h3>
          {"We use your data for marketing and providing Services that might interest you:"}
        </h3>
        
        <ul>
          
          <li>
            {"To improve our Services and for general business development, for example to develop new products and features and explore new business opportunities."}
          </li>
          
          <li>
            {"For marketing, product and customer analysis, including testing, for example to improve our product range and optimise our customer offerings."}
          </li>
          
          <li>
            {"To be able to administer your participation in competitions, offerings, and events."}
          </li>
          
          <li>
            {"To provide you with information, news, and marketing about our Services, including where we partner with others to offer similar services."}
          </li>
          
          <li>
            {"For advertising, including personalised advertising."}
          </li>
          
        </ul>
        
      </section>
      
      {/* Section 8 */}
      
      <section className="section" id="section-8">
        
        <h2>
          {"8. Who we share your personal data with"}
        </h2>
        
        <p>
          {"Due to the nature of our business, there may be times we share your data with the following third parties. (We do not sell your personal data.)"}
        </p>
        
        <ul>
          
          <li style={{ marginBottom: "20px" }}>
            <strong>
              {"Asanka Send group companies:"}
            </strong>
            {" We share data with members of the Asanka Send group to provide our Services."}
          </li>
          
          <li style={{ marginBottom: "20px" }}>
            <strong>
              {"Asanka Send recipients:"}
            </strong>
            {" We also share your personal data with the person who provides your payment method and recipients (through service providers) that you transfer money to. Where you make a transfer, the recipient may receive your details with your payment (for example, your name and IBAN)."}
          </li>
          
          <li style={{ marginBottom: "20px" }}>
            <strong>
              {"Asanka Send service providers:"}
            </strong>
            {" We will share your personal data with various suppliers who provide us with services that we need in order to provide our Services to you, for example:\n              "}
            <ul>
              
              <li>
                {"Suppliers who provide us with IT, payment and delivery services;"}
              </li>
              
              <li>
                {"Suppliers who help us meet our legal and regulatory obligations, such as identity verification service providers and background check providers (these providers may use your data to conduct checks with credit reference agencies, financial or credit institutions, official registers and databases, as well as fraud prevention agencies to verify your identity);"}
              </li>
              
              <li>
                {"Our banking and financial services partners and payments networks;"}
              </li>
              
              <li>
                {"Analytics providers and search information providers;"}
              </li>
              
              <li>
                {"Customer-service providers, survey providers and developers (including chatbot services); and"}
              </li>
              
              <li>
                {"Communications service providers."}
              </li>
              
            </ul>
            
          </li>
          
          <li style={{ marginBottom: "20px" }}>
            <strong>
              {"Third parties authorised by you:"}
            </strong>
            {" We share personal data with parties directly authorised by you. The use of data by an authorised third party is subject to the third party's privacy policy and any agreements you have with them."}
          </li>
          
          <li style={{ marginBottom: "20px" }}>
            <strong>
              {"For legal reasons:"}
            </strong>
            {" There may also be instances where we may need to share personal data with a competent law enforcement body, regulatory body, government agency, court, or other third party where we believe disclosure is necessary (i) as a matter of applicable law or regulation or (ii) to exercise, establish or defend our legal rights."}
          </li>
          
          <li style={{ marginBottom: "20px" }}>
            <strong>
              {"To advertisers, advertising and social media networks, analytics and search engine providers:"}
            </strong>
            {" We share personal data with these providers (which includes Google) to select and serve relevant adverts to you and others. You consent to these providers using personal data for personalised advertising."}
          </li>
          
          <li style={{ marginBottom: "20px" }}>
            <strong>
              {"To Asanka Send's ambassadors:"}
            </strong>
            {" We share personal data with ambassadors we are partnered with to promote our Services to you. You consent to these ambassadors using personal data to advertise our Services to you."}
          </li>
          
        </ul>
        
      </section>
      
      {/* Section 9 */}
      
      <section className="section" id="section-9">
        
        <h2>
          {"9. International data transfers"}
        </h2>
        
        <p>
          {"As our Services are international, we may need to transfer your personal data outside the country you are located in to help us provide our Services."}
        </p>
        
        <p>
          {"Personal data that we collect may be transferred to, and stored and processed in, the United States or any other country in which we or our affiliates, subcontractors, vendors or partner payment processors maintain facilities. The laws in the U.S. and other countries regarding personal information may be different from the laws of your state or country. Any such transfers will comply with safeguards as required by relevant law. It may also be processed by staff operating outside the country you are located in, who work for us or for one of our payment processors. Such staff may be engaged in, among other things, the fulfilment of your payment order, the processing of your payment details and the provision of customer support. By submitting your personal data, you agree to this transfer, storing or processing."}
        </p>
        
        <p>
          {"If we transfer your personal data to another country that doesn't offer a standard of data protection equivalent to where you are located, we will make sure that your personal data is sufficiently protected. For example, we'll make sure that a contract with strict data protection safeguards is in place before we transfer your personal data."}
        </p>
        
      </section>
      
      {/* Section 10 */}
      
      <section className="section" id="section-10">
        
        <h2>
          {"10. Marketing and other communications"}
        </h2>
        
        <p>
          {"We may use the contact details you provide to send you marketing communications by email, telephone, SMS, whatsapp, push notification, social media or other communication formats about our Services. This may include news, promotional officers, opportunities to enter competitions and win prizes and updates regarding our company and Services (including new services and products)."}
        </p>
        
        <p>
          {"You have the right to ask us not to process your personal information for marketing purposes."}
        </p>
        
        <p>
          {"You can exercise this right simply at any time telling us or following the instructions in the communication e.g. unsubscribing from emails and replying 'STOP' to SMS (messaging rates may apply). We respect your choice and will stop sending you such communications as soon as reasonably practicable and within one month of receiving your request to unsubscribe. You are free to change your choices at any time. We may contact you to reaffirm your consent to marketing or other communications."}
        </p>
        
        <p>
          {"Please note that if you ask us not to contact you by email at a certain email address, we will retain a copy of that email address on a \"suppression list\" in order to comply with your no-contact request."}
        </p>
        
        <p>
          {"If you opt-out, we may still send you important service and administrative messages, from which you cannot opt-out."}
        </p>
        
        <h3>
          {"Asanka Send authentication by SMS"}
        </h3>
        
        <p>
          {"In order for us to set up strong customer authentication on your account, a pin code will be sent to your mobile phone upon completing your account sign up through the App. You will receive one message per request to authenticate, message and data rates may apply."}
        </p>
        
        <p>
          {"You confirm that you hold the account corresponding to the mobile phone number you enter. By signing up for Asanka Send and consenting to receive the pin code, you are agreeing to our User Agreement, this Privacy Policy and our eCommunications Policy. For help please contact "}
          <a href="mailto:info@asankasend.com" style={{ color: "var(--privacy-policy-accent)", textDecoration: "none", fontWeight: "600" }}>
            {"info@asankasend.com"}
          </a>
          {"."}
        </p>
        
      </section>
      
      {/* Section 11 */}
      
      <section className="section" id="section-11">
        
        <h2>
          {"11. Website links"}
        </h2>
        
        <p>
          {"This website contains links to other websites, which are clearly marked as such. Please note that we have no control over external websites and are not responsible for the protection and privacy of any information which you may provide to them. Please refer to a website's privacy policy when using it."}
        </p>
        
      </section>
      
      {/* Section 12 */}
      
      <section className="section" id="section-12">
        
        <h2>
          {"12. Cookies"}
        </h2>
        
        <p>
          {"A cookie is a small text file that is unique to the web browser on your computer or mobile device, which is used to retain user preferences, and enhance browsing experience. We use cookies and other tracking technologies on our website, App and in emails we send you."}
        </p>
        
        <p>
          {"The types of cookies we use, and the information collected using them include, but are not necessarily limited to:"}
        </p>
        
        <h4>
          {"Essential"}
        </h4>
        
        <ul>
          
          <li>
            <strong>
              {"in the App:"}
            </strong>
            {" 3DS and other payment authentication products that involve a webview"}
          </li>
          
        </ul>
        
        <p>
          {"These cookies help us to determine the showing language in a webview and to successfully redirect from a webview within the App to the banking institution site and back to the App."}
        </p>
        
        <h4>
          {"Analytics"}
        </h4>
        
        <ul>
          
          <li>
            <strong>
              {"on our website:"}
            </strong>
            {" Google Analytics and Mixpanel (SDK)"}
          </li>
          
        </ul>
        
        <p>
          {"These cookies help us track website visitors' basic data/views and ensure the website is functioning properly."}
        </p>
        
        <h4>
          {"Personalization"}
        </h4>
        
        <ul>
          
          <li>
            <strong>
              {"on our website and in the App:"}
            </strong>
            {" Zendesk"}
          </li>
          
        </ul>
        
        <p>
          {"These cookies help us to determine a user's language in order to show them correctly translated FAQs."}
        </p>
        
        <h4>
          {"Marketing"}
        </h4>
        
        <ul>
          
          <li>
            <strong>
              {"in the App:"}
            </strong>
            {" AppsFlyer (SDK)"}
          </li>
          
        </ul>
        
        <p>
          {"These cookies help us to facilitate our referrals program."}
        </p>
        
        <p>
          {"We collect the bare minimum, necessary cookies in order to operate the relevant website or app. By continuing to use our website/App, you are agreeing to our use of essential cookies."}
        </p>
        
        <p>
          {"Check the 'cookie settings' menu to change your cookie preferences. You can choose to alter cookies settings related to the use of our website, but this may limit your ability to access certain areas of the website."}
        </p>
        
      </section>
      
      {/* Section 13 */}
      
      <section className="section" id="section-13">
        
        <h2>
          {"13. Automated decision-making"}
        </h2>
        
        <p>
          {"We use automated processes to check that your application to access the Services and your use of the Services meet our required standard, including verifying your identity, and to help prevent fraud or other illegal activities. These processes may make an automated decision to reject your application or a proposed transaction, to block a suspicious attempt to login to your account, or to close your account. If this happens, you will be notified and offered the opportunity to provide further information and challenge the decision through an appeal mechanism, which includes a manual review. In any case, if you feel that an automated process may have impacted you, please contact us at "}
          <a href="mailto:info@asankasend.com" style={{ color: "var(--privacy-policy-accent)", textDecoration: "none", fontWeight: "600" }}>
            {"info@asankasend.com"}
          </a>
          {"."}
        </p>
        
      </section>
      
      {/* Section 14 */}
      
      <section className="section" id="section-14">
        
        <h2>
          {"14. Data retention"}
        </h2>
        
        <p>
          {"We will generally keep your personal data for ten years after our business relationship with you ends, or for as long as necessary in line with various local requirements, such as for example, best practice recommendations (e.g. supervisory authority recommendations), relevant guidelines (e.g. employment guidance) or for as long as mandated under specific legislation (e.g. tax laws)."}
        </p>
        
        <p>
          {"We will also determine appropriate retention periods based on our legitimate interests where identified. As a regulated financial institution, we are required by law to store some of your data beyond the termination of your relationship with us. After such time, your data will only be accessed or processed if absolutely necessary. We will always delete data that is no longer required by relevant legislation."}
        </p>
        
        <p>
          {"When personal data needs to be deleted, we will either delete manually or automatically, or anonymise it if deletion is not possible."}
        </p>
        
      </section>
      
      {/* Section 15 */}
      
      <section className="section" id="section-15">
        
        <h2>
          {"15. Data security"}
        </h2>
        
        <p>
          {"We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We use reasonable physical and technical safeguards to protect your personal information, both during transmission and storage. No method of transmission over the internet, including by email, or method of electronic storage is 100% secure. So, we cannot guarantee its absolute security."}
        </p>
        
        <p>
          {"All information you provide to us is stored on our secure servers. Any payment transactions will be encrypted using Transport Layer Security technology. You are responsible for keeping confidential any passwords we give you. We ask you not to share this password with anyone else and not to use this password for other services or products."}
        </p>
        
        <p>
          {"In addition, we limit access to your personal data to those who need it to do their jobs (i.e. employees, agents, contractors and other third parties who have a business need to know). Where this is a third party, they will only process your personal data on our instructions and they are subject to a duty of confidentiality."}
        </p>
        
      </section>
      
      {/* Section 16 */}
      
      <section className="section" id="section-16">
        
        <h2>
          {"16. Data protection rights"}
        </h2>
        
        <p>
          {"Data protection laws enable several rights in relation to how an organisation processes your personal data."}
        </p>
        
        <p>
          {"If you would like to exercise any of the below rights you can do so by sending us a written request to "}
          <a href="mailto:info@asankasend.com" style={{ color: "var(--privacy-policy-accent)", textDecoration: "none", fontWeight: "600" }}>
            {"info@asankasend.com"}
          </a>
          {". For security reasons, we can't deal with your request if we're not sure of your identity, so we may ask you for proof of ID."}
        </p>
        
        <p>
          {"Your ability to exercise these rights will depend on a number of factors. Sometimes, we won't be able to agree to your request (for example, if we have a legitimate reason for not doing so or the right does not apply to the particular information we hold about you). If you object to us using personal data which we need in order to provide our Services, we may need to close your account as we won't be able to provide the Services."}
        </p>
        
        <p>
          {"When you exercise one of your rights it may take us up to one month to respond or implement your changes."}
        </p>
        
        <div>
          
          <h4>
            {"United Kingdom and the European Union"}
          </h4>
          
          <ul>
            
            <li>
              <strong>
                {"Right to be informed"}
              </strong>
              {" - You have the right to know what personal data we collect about you, how we use it, for what purpose and in accordance with which lawful basis, who we share it with and how long we keep it. We use our Privacy Policy to explain this."}
            </li>
            
            <li>
              <strong>
                {"Right to access data "}
              </strong>
              {" - You have the right to receive a copy of the Personal Data we hold about you (this is sometimes referred to as a \u201cSubject Access Request\u201d)"}
            </li>
            
            <li>
              <strong>
                {"Right to rectification"}
              </strong>
              {" - You have the right to have any incomplete or inaccurate information we hold about you corrected. You can also make updates yourself in the App."}
            </li>
            
            <li>
              <strong>
                {"Right to erasure"}
              </strong>
              {" - You have the right to ask us to delete your personal data if it is no longer necessary for the purpose for which it was collected or needed by us to meet our legal obligations or for a legitimate interest."}
            </li>
            
            <li>
              <strong>
                {"Right to restrict processing"}
              </strong>
              {" - You can tell us to stop using your personal data, including for marketing."}
            </li>
            
            <li>
              <strong>
                {"Right to objection"}
              </strong>
              {" - You have the right to object to us processing your personal data. If our legal basis for using your personal data is 'legitimate interests' and you disagree with us using it, you can object. However, we will assess whether our interests are overridden by your fundamental rights and freedoms."}
            </li>
            
            <li>
              <strong>
                {"Right to portability"}
              </strong>
              {" - You can ask us to transfer personal data to you or another company."}
            </li>
            
          </ul>
          
          <h4 style={{ marginTop: "1rem" }}>
            {"Canada"}
          </h4>
          
          <ul>
            
            <li>
              <strong>
                {"Right to be informed"}
              </strong>
              {" - You have the right to know what personal data we collect about you, how we use it, for what purpose when you give us consent to process your personal data. We use the Privacy Policy to explain this."}
            </li>
            
            <li>
              <strong>
                {"Right to access data "}
              </strong>
              {" - You have the right to be informed of the existence and use of your personal data and to receive a copy of the personal data we hold about you."}
            </li>
            
            <li>
              <strong>
                {"Right to rectification"}
              </strong>
              {" - You have the right to have any incomplete or inaccurate information we hold about you corrected You can also make updates yourself in the App."}
            </li>
            
            <li>
              <strong>
                {"Right to objection"}
              </strong>
              {" - You have the right to object to us processing your personal data where our legal basis for processing is consent."}
            </li>
            
          </ul>
          
          <h4>
            {"United Arab Emirates"}
          </h4>
          
          <ul>
            
            <li>
              <strong>
                {"Right of access"}
              </strong>
              {" - Upon request, we will provide you with information about whether we hold any of your personal data. We will also provide, free of charge, access to one copy of your personal data that we may hold."}
            </li>
            
            <li>
              <strong>
                {"Right of rectification"}
              </strong>
              {" - You may request to review, delete, or update your personal data to ensure it is accurate. You can also make updates yourself in the App."}
            </li>
            
            <li>
              <strong>
                {"Right to erasure"}
              </strong>
              {" - You have the right to ask us to delete your personal data if it is no longer necessary for the purpose for which it was collected, or if it is no longer needed for our legal obligations or legitimate interests. We will inform you which of your personal data may be erased without violating our legal obligations."}
            </li>
            
            <li>
              <strong>
                {"Right to not be subject to automated decision-making"}
              </strong>
              {" - You have the right to opt out of us processing your Personal Information for the purposes of profiling in furtherance of solely automated decisions that produce legal or similarly significant effects concerning the consumer."}
            </li>
            
            <li>
              <strong>
                {"Right to restrict or object to our processing"}
              </strong>
              {" - You have the right to ask us not to process your personal data if we are processing your data based on legitimate interests or the performance of a task in the public interest as an exercise of official authority (including profiling) or using your data for direct marketing (including profiling). You also have the right to ask us not to process your personal data while a rectification request is pending."}
            </li>
            
            <li>
              <strong>
                {"Right to data portability"}
              </strong>
              {" - You have the right to request a copy of your personal data , including your transaction history. Your transaction history is downloadable in machine-readable format from the App"}
              <br />
              
              <span>
                {"You have the right to request that we rectify or delete personal data collected and maintained about you. However, there are some circumstances where your request to rectify or delete your personal data may be denied if it is necessary for us to retain your information (for example, for legal or regulatory reasons)."}
              </span>
              
            </li>
            
            <li>
              <strong>
                {"Right to not be discriminated against because of the exercise of any of the above rights."}
              </strong>
            </li>
            
          </ul>
          
          <h3 style={{ paddingTop: "1rem" }}>
            {"US State privacy rights"}
          </h3>
          
          <p>
            {"In this section \u201cPersonal Information\u201d means data that can be categorised into data that directly identifies you individually."}
          </p>
          
          <ul>
            
            <li>
              {"\n                If you live in "}
              <strong>
                {"California"}
              </strong>
              {", we comply with the California Consumer Privacy Act of 2018 ("}
              <strong>
                {"CCPA"}
              </strong>
              {") and the California Privacy Rights Act of 2020 ("}
              <strong>
                {"CPRA"}
              </strong>
              {").\n              "}
            </li>
            
            <li>
              {"If you live in Colorado, we comply with the Colorado Privacy Act ("}
              <strong>
                {"CPA"}
              </strong>
              {")."}
            </li>
            
            <li>
              {"If you live in Connecticut, we comply with the Senate Bill 6 for an Act Concerning Personal Data Privacy and Online Monitoring ("}
              <strong>
                {"CTDPA"}
              </strong>
              {")."}
            </li>
            
            <li>
              {"If you are in Utah, we comply with Senate Bill 227 for the Consumer Privacy Act ("}
              <strong>
                {"UCPA"}
              </strong>
              {")."}
            </li>
            
            <li>
              {"If you live in Virginia, we comply with the Consumer Data Protection Act ("}
              <strong>
                {"CDPA"}
              </strong>
              {")."}
            </li>
            
          </ul>
          
          <p>
            {"If you live in any of the above states, you have the following rights in relation to the processing of your Personal Information:"}
          </p>
          
          <ul>
            
            <li>
              <strong>
                {"Right to be informed"}
              </strong>
              {" - We are required to tell you important information about what we do with your Personal Information. We do this through this Privacy Policy. In particular, it sets out:\n                 "}
              <ul>
                
                <li>
                  {"The categories of Personal Information (and sensitive Personal Information) to be collected and the purposes for which these are collected and used (including whether information is sold or shared);"}
                </li>
                
                <li>
                  {"How long we will keep your Personal Information (including sensitive Personal Information) for;"}
                </li>
                
                <li>
                  {"How and where you can exercise the rights you have under data protection legislation applicable to you i.e. through our email address info@asankasend.com;"}
                </li>
                
                <li>
                  {"The categories of Personal Information we share with third parties, and the categories of those third parties;"}
                </li>
                
              </ul>
              
            </li>
            
          </ul>
          
          <ul>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Right to access"}
              </strong>
              {" - You have the right to ask us to confirm whether or not we are processing your Personal Information and access it. In particular, you can ask us:\n                 "}
              <ul>
                
                <li>
                  {"What categories of Personal Information and what specific pieces of Personal Information we have collected about you"}
                </li>
                
                <li>
                  {"The categories of sources from which the Personal Information is collected"}
                </li>
                
                <li>
                  {"The business or commercial purpose for collecting or sharing your Personal Information"}
                </li>
                
                <li>
                  {"The categories of third parties to whom we disclose your Personal Information"}
                </li>
                
              </ul>
              
            </li>
            
          </ul>
          
          <ul>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Right to rectification"}
              </strong>
              {" - you have the right to correct inaccuracies in Personal Information we hold about you, taking into account the nature of the Personal Information and the purposes of processing it."}
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Right to erasure"}
              </strong>
              {" - You have the right to request deletion of Personal Information we hold about you.This right is subject to our regulatory obligations to store certain Personal Information beyond the termination of your relationship with us."}
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Right to data portability"}
              </strong>
              {" - You have the right to request a copy of your Personal Information, including your transaction history. Your transaction history is downloadable in usable, machine-readable format from the App that allows you, as far as possible, to transfer the Personal Information without impediment."}
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Right to opt-out"}
              </strong>
              {" - You the right to opt out of the processing of your Personal Information for purposes of:\n                "}
              <ul>
                
                <li>
                  {"Targeted advertising; or"}
                </li>
                
                <li>
                  {"The sale of Personal Information(excepted as permitted or required by law)."}
                </li>
                
              </ul>
              
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"\"Do Not Sell My Personal Information\u201d"}
              </strong>
              {" - You have the right to opt out of \u201csales\u201d of Personal Information. We do not \u201csell\u201d Personal Information. We do not have actual knowledge of any \u201csale\u201d of Personal Information of any individual under the age of sixteen (16)."}
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Right to not be subject to automated decision-making"}
              </strong>
              {" - You have the right to opt out of us processing your Personal Information for the purposes of profiling in furtherance of solely automated decisions that produce legal or similarly significant effects concerning the consumer."}
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Additional rights in Virginia"}
              </strong>
              {" - You have the right to appeal any refusal by us to take an action following your request to exercise your rights."}
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Additional rights in California"}
              </strong>
              {" - You have the right to request us to limit our use of the sensitive Personal Information to what is necessary to perform the services as reasonably expected. You also have the right to not be discriminated against because of the exercise of any of the above rights."}
            </li>
            
            <li style={{ marginBottom: "20px" }}>
              <strong>
                {"Notice for Texas"}
              </strong>
              {" - If you have a complaint, first contact the consumer assistance division of Asanka Send at 833-916-0670, if you still have an unresolved complaint regarding the company's (money transmission or currency exchange) activity, please direct your complaint to: Texas Department of Banking, 2601 North Lamar Boulevard, Austin, Texas 78705, 1-877-276-5554 (toll free), "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.dob.texas.gov" style={{ color: "var(--privacy-policy-accent)", textDecoration: "none", fontWeight: "600" }}>
                {"www.dob.texas.gov"}
              </a>
              {"."}
            </li>
            
          </ul>
          
        </div>
        
      </section>
      
      {/* Section 17 */}
      
      <section className="section" id="section-17">
        
        <h2>
          {"17. Concerns and complaints"}
        </h2>
        
        <p>
          {"We understand you may have concerns and complaints in relation to this Privacy Policy and in relation to how we process personal data. If you would like to contact us directly to talk to us about a concern or to raise a complaint, you can do so by emailing us at "}
          <a href="mailto:info@asankasend.com" style={{ color: "var(--privacy-policy-accent)", textDecoration: "none", fontWeight: "600" }}>
            {"info@asankasend.com."}
          </a>
        </p>
        
      </section>
      
      {/* Section 18 */}
      
      <section className="section" id="section-18">
        
        <h2>
          {"18. Changes to this Privacy Policy"}
        </h2>
        
        <p>
          {"We will make changes to this Privacy Policy from time to time to reflect changes to law, best practice and how we process personal data. We will do this by posting a revised version on this website. We recommend that you check this webpage occasionally to stay up to date."}
        </p>
        
      </section>
      
      {/* Section 19 */}
      
      <section className="section" id="section-19">
        
        <h2>
          {"19. What happens if our business changes hands?"}
        </h2>
        
        <p>
          {"We may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of our business. Any personal data that you have provided will, where it is relevant to any part of our business that is being transferred, be transferred along with that part and the new owner or newly controlling party will be permitted to use that data only for the purposes for which it was originally collected by us."}
        </p>
        
      </section>
    </main>
  </div>
  );
}

function PrivacyPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="h-auto px-0 text-base font-medium text-asanka-accent-muted underline transition-colors hover:text-asanka-secondary text-sm"
        >
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent
        className="privacy-policy-dialog flex h-[min(90dvh,880px)] w-[min(928px,calc(100vw-1.5rem))] max-w-[min(928px,calc(100vw-1.5rem))] flex-col gap-0 overflow-hidden border-border p-0 sm:max-w-[min(928px,calc(100vw-2rem))]"
        showCloseButton
      >
        <DialogTitle className="sr-only">Privacy Policy</DialogTitle>
        <div className="privacy-policy-scope min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-lg">
          <PrivacyPolicyDocument />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PrivacyPolicy;
