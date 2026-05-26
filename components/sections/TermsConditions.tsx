"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "../../public/styles/terms-condition.css";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

function TermsAndConditionsDocument() {
  return (
    <div className="wrap">
      <header>
        <div>
          <h1 id="title">{"Asanka Send User Agreement"}</h1>
          <div className="meta">
            {"Version "}
            <strong>{"1"}</strong>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1 */}
        <section className="section" id="section-1">
          <h2>{"1. OVERVIEW"}</h2>
          <ol className="clause section-1">
            <li>
              {
                'These terms and conditions ("Agreement") govern the terms under which you may use the "Asanka Send" App to make non-recurring international remittances to any eligible Recipient (the "Service"). By accessing, registering with and using the Service, you agree to be bound by the Agreement. If you do not wish to be bound by the Agreement, do not access, register with or use the Service. The language of this Agreement is English and all Services, Payment Instructions and Transfers carried out in connection with it shall be in English.'
              }
            </li>
            <li>
              {
                'In this Agreement, the terms "Asanka Send", "we", "us", and "our" refer to Asanka Send, together with its employees, directors, affiliates, successors, and assigns.'
              }
            </li>
            <li>
              {
                'The terms "you" and "your" refer to users of the Service, as Senders, Recipients, other users or visitors to the website.'
              }
            </li>
            <li>
              {
                "This Agreement is effective from the date on which you first access, register or use the Service and will continue until terminated by us or you (in accordance with Clause 13). The Agreement may change from time to time (in accordance with Clause 12), but changes will only be effective from the date notified to you and will not change the terms on which you previously used the Service."
              }
            </li>
          </ol>
        </section>

        {/* Section 2 – Definitions */}
        <section className="section definitions" id="section-2">
          <h2>{"2. DEFINITIONS"}</h2>
          <p>
            <strong>{"\u201cApp\u201d"}</strong>
            {" means our mobile application for the sending of Payment Instructions."}
          </p>
          <p>
            <strong>{"\u201cDestination Country\u201d"}</strong>
            {" means the country in which the Recipient receives money through the Service."}
          </p>
          <p>
            <strong>{"\u201cPassword\u201d"}</strong>
            {
              ' includes a Personal Identification Number \u201cPIN\u201d or such other log-in information that we may choose to accept.'
            }
          </p>
          <p>
            <strong>{"\u201cPayment Instrument\u201d"}</strong>
            {
              " means a valid instrument of payment used to initiate a Payment Instruction, such as a debit card."
            }
          </p>
          <p>
            <strong>{"\u201cPayment Instruction\u201d"}</strong>
            {" means a specific instruction from you requesting us to effect a Transfer."}
          </p>
          <p>
            <strong>{"\u201cPayout Amount\u201d"}</strong>
            {
              " means the amount paid, after any foreign exchange conversion, to the Recipient\u2019s account exclusive of the Service Fee."
            }
          </p>
          <p>
            <strong>{"\u201cRecipient\u201d"}</strong>
            {
              " means someone who receives money into an account provided by a Service Provider pursuant to a Payment Instruction sent through the Service."
            }
          </p>
          <p>
            <strong>{"\u201cSender\u201d"}</strong>
            {" means someone who uses the Service to send money."}
          </p>
          <p>
            <strong>{"\u201cSend Amount\u201d"}</strong>
            {
              " means the amount of money that the Sender wishes to send to the Recipient, excluding any applicable Service Fee and prior to any foreign exchange conversion."
            }
          </p>
          <p>
            <strong>{"\u201cService Fee\u201d"}</strong>
            {
              " means our fee (which may vary depending on the destination of the Sender and the Recipient and the Send Amount), which will be presented to you before confirming a Payment Instruction. Other taxes and charges may exist that are not paid through or imposed by us (e.g. mobile money withdrawal fees)."
            }
          </p>
          <p>
            <strong>{"\u201cService Provider\u201d"}</strong>
            {
              " means a local bank, mobile network operator, or other third party service provider in a Destination Country (with whom we work to provide the Service) which provides an account to a Recipient."
            }
          </p>
          <p>
            <strong>{"\u201cTransfer\u201d"}</strong>
            {" means the transfer of money through the Service."}
          </p>
          <p>
            <strong>{"\u201cTransfer History\u201d"}</strong>
            {
              " means the record of your Transfers on our App, which you may access using your email and Password registration details."
            }
          </p>
        </section>

        {/* Section 3 */}
        <section className="section" id="section-3">
          <h2>{"3. USING THE SERVICE"}</h2>
          <ol className="clause section-3">
            <li>
              {
                "The Service allows you to make international remittances to Recipients holding accounts at selected Service Providers in Destination Countries."
              }
            </li>
            <li>
              {
                "To register for the Service, download the application (e.g. from the Apple App Store or Google Play) and follow the instructions. By signing up for the Service, you are accepting the terms of this Agreement and our Privacy Policy, which is available on our website and in the App."
              }
            </li>
            <li>
              {"Once you have registered for the Service, you can:"}
              <ol className="sub">
                <li>{"submit Payment Instructions; and"}</li>
                <li>
                  {
                    "view your Transfer information, including current and previous Transfers."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "You must use a valid Payment Instrument to make Payment Instructions through the Service."
              }
            </li>
            <li>
              {
                'You can submit a Payment Instruction (and otherwise manage your use of the Service) by logging into the App with your username and Password and entering or selecting the Send Amount and associated information, then clicking \u201cSend\u201d on the confirmation page. Your confirmation authorizes us to charge your Payment Instrument for the appropriate amount and provides consent for us to do so. We will then immediately transfer the Payout Amount to the Recipient, which means that you will not be able to cancel a Transfer once we have received the Payment Instruction.'
              }
            </li>
            <li>
              {
                "For security reasons, we may require you to re-enter your Password to finalise your Payment Instructions or access certain functions in the App."
              }
            </li>
            <li>
              {
                "When you initiate a Payment Instruction, we will notify you of the Service Fee to be charged (if any) and the applicable exchange rate you will receive."
              }
              <ol className="sub">
                <li>
                  {
                    "If we charge a Service Fee, it may vary based on the type of Transfer you are attempting (e.g. based on the destination of you and the Recipient and the amount you wish to send)."
                  }
                </li>
                <li>
                  {
                    "When we refer to an exchange rate in this Agreement, it means the rate set by us for the relevant currency pair, which will generally change on a daily basis. For some pairs, there will be a difference between the exchange rate at which we buy foreign currency and the exchange rate provided to you, which is designed to cover our operating costs and the risk that exchange rates move between the time we send the Payout Amount to the Recipient and receive the Send Amount from you."
                  }
                </li>
                <li>
                  {
                    "Our Service Fees and exchange rates are available on our website and in the App and will be presented to you in the App before you confirm the Transfer."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "You may choose to participate in our Referral Program. If you participate in our Referral Program, you agree to be bound by the Referral Program Terms and Conditions, which can be found at "
              }
              <a href="https://www.asankasend.com/referrals-terms">
                {"https://www.asankasend.com/referrals-terms"}
              </a>
              {"."}
            </li>
          </ol>
        </section>

        {/* Section 4 */}
        <section className="section" id="section-4">
          <h2>{"4. OUR OBLIGATIONS"}</h2>
          <ol className="clause section-4">
            <li>
              {
                "Subject to this Agreement, we agree to provide the Service to you using reasonable care. You acknowledge that the Service may not be available, in whole or in part, in certain regions, countries, or jurisdictions."
              }
            </li>
            <li>
              {
                "We are not obliged to process any particular Transfer. When you submit a Payment Instruction, you are requesting that we process the Transfer on your behalf and consenting to the execution of the Transfer. We may, in our sole discretion, choose whether or not to accept the offer to process that Transfer (in accordance with Clause 6)."
              }
            </li>
            <li>
              {
                "We will ask you for information when you are registering for the Service, and may also ask you for information at other times, to fulfil our legal requirements. You must provide us with accurate and complete information in response. Please consult our Privacy Policy for details on how we collect, use and store this information."
              }
            </li>
            <li>
              {"While our Service is generally able to send Transfers instantly:"}
              <ol className="sub">
                <li>
                  {
                    "if the Recipient\u2019s account is held in the European Economic Area (\u201cEEA\u201d) and is in pounds (\u00a3), euro (\u20ac) or another EEA currency, the Recipient\u2019s account provider (e.g. bank) will, at the latest, receive the money within two working days after we accept the Payment Instruction; and"
                  }
                </li>
                <li>
                  {
                    "otherwise, the Recipient\u2019s account provider will receive the money, at the latest, within four working days after we accept the Payment Instruction."
                  }
                </li>
              </ol>
            </li>
            <li>
              {"While Recipients generally receive the Payout Amount instantly:"}
              <ol className="sub">
                <li>
                  {
                    "if the Recipient\u2019s account provider is in the EEA, and the Recipient\u2019s account is in an EEA currency, the account provider is required by law to put the money into the Recipient\u2019s account as soon as it receives it; and"
                  }
                </li>
                <li>
                  {
                    "banking practices may vary if you send money to a non-EEA currency account or to an account outside the EEA \u2013 for more information on when a payment will be credited to such an account, you need to contact the Recipient\u2019s account provider."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "Delivery times quoted on our website (or elsewhere) are representative for the \u201cnormal\u201d/average service and are not a guarantee of an individual Service or Transfer time."
              }
            </li>
            <li>
              {"We may delay or suspend a Transfer including:"}
              <ol className="sub">
                <li>{"to verify your identity;"}</li>
                <li>
                  {
                    "to respond to any security alerts which we receive in relation to your use of the Service or any particular Transfer;"
                  }
                </li>
                <li>{"to validate your Payment Instruction;"}</li>
                <li>{"due to system outages within our Service Providers; and/or"}</li>
                <li>{"otherwise to comply with applicable law."}</li>
              </ol>
            </li>
            <li>
              {
                "We may send and receive notifications in relation to a Transfer by email, SMS, and notifications via the App. Without undue delay, we will provide you with information after acceptance of a Payment Instruction enabling you to identify the Transfer, along with details of the amount of the Transfer in the currency used in the Transfer, any Service Fees we may charge, the amount received in foreign currency, and the date on which the Payment Instruction was received."
              }
            </li>
            <li>
              {
                "We will attempt to maintain up to date information regarding the availability of Service Providers by means of information on our website or our App."
              }
            </li>
          </ol>
        </section>

        {/* Section 5 */}
        <section className="section" id="section-5">
          <h2>{"5. YOUR OBLIGATIONS"}</h2>
          <ol className="clause section-5">
            <li>
              {"You agree that:"}
              <ol className="sub">
                <li>
                  {
                    "you will not access, use or attempt to use the Service to provide any Payment Instructions unless you are at least 18 years old, and that you have the legal capacity to form a binding legal contract in any relevant jurisdiction;"
                  }
                </li>
                <li>
                  {
                    "for each Payment Instruction that you submit, we may charge a Service Fee in addition to the Send Amount. Payment becomes due at the time that you submit your Payment Instruction. To the maximum extent permitted by law, the Service Fee is non-refundable unless expressly stated in this Agreement. If you submit a Payment Instruction that results in us becoming liable for charges including but not limited to chargeback or other fees, you agree to reimburse us for all such fees; and"
                  }
                </li>
                <li>
                  {
                    "in connection with your registration and use of the Service, you will:"
                  }
                  <ol className="sub2">
                    <li>
                      {
                        "provide us with true, accurate, current and complete evidence of your identity, and promptly update your personal information if and when it changes;"
                      }
                    </li>
                    <li>
                      {
                        "provide us with any identity documentations as may be requested by us;"
                      }
                    </li>
                    <li>{"provide us with details of one or more Payment Instruments;"}</li>
                    <li>
                      {
                        "provide us with true, accurate, current and complete information as we indicate on the website is required to receive the Service and any other information which may be required in relation to the Recipient; and"
                      }
                    </li>
                    <li>
                      {
                        "provide us with any other information that must be provided for a Payment Instruction to be properly executed, either when you are preparing the Payment Instruction on our App, or if we contact you for additional information relating to the Payment Instruction."
                      }
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              {
                "You must make every effort to keep your log in details safe and prevent unauthorised access to the Service by:"
              }
              <ol className="sub">
                <li>
                  {
                    "changing your Password regularly and ensure that it is not reused for other services;"
                  }
                </li>
                <li>
                  {
                    "contacting us (at the details in the Contact section below) if anyone asks you for your Password;"
                  }
                </li>
                <li>{"setting up 2-step authentication where prompted; and"}</li>
                <li>
                  {
                    "keeping your e-mail account secure. Let us know immediately if your email address becomes compromised."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "Contact us if you suspect your log in details have been compromised. If you suspect your log in or other security credentials are stolen, lost, used without your authorisation or otherwise compromised, you must contact us (at the details in the Contact section below) immediately; you are also advised to change your Password. Any undue delays in notifying us may affect the security of your data (including your Payment Instrument) and also result in you being responsible for financial losses."
              }
            </li>
            <li>
              {
                "You must not share your username and Password with anyone else, except for a firm holding a licence with the FCA (or any equivalent regulator) to provide either or both an \u201caccount information service\u201d or a \u201cpayment initiation service\u201d, as defined in the PSRs 2017."
              }
            </li>
            <li>
              {
                "We do not accept any liability for loss or damages to you or any third party resulting from non-payment or delay in payment of a Payout Amount to a Recipient or failure to perform a Transfer under the Service if you are in serious breach of your obligations listed in this Clause 5, or if the foregoing non-payment, delay or failure is caused by a Service Provider."
              }
            </li>
            <li>
              {
                "When you are using the Service under this Agreement, it is your responsibility to make sure all the details are accurate before submission. You will be given the opportunity to confirm Payment Instructions before submission and you must check the details carefully."
              }
            </li>
            <li>
              {
                "The total amount that you will be required to pay, including the Service Fee and the relevant exchange rate, will be displayed clearly on the App before you are asked to confirm your Payment Instruction. Proceeding with a Payment Instruction at this point is entirely optional."
              }
            </li>
            <li>
              {
                "Others might impose taxes, fees or charges on you, e.g. for use of a particular Payment Instrument to fund a Transfer. These may include, but are not limited to, unauthorised overdraft fees imposed by banks if there are insufficient funds in your bank account and/or the issuer of your chosen Payment Instrument charging you a fee when you pay us."
              }
            </li>
            <li>
              {
                "Others might impose taxes, fees or charges on the Recipient, e.g. to withdraw the Payout Amount, a Service Provider may charge a withdrawal fee. We may offer you the option of sending additional funds to cover the cost of that fee. Whether you choose to pay that fee is entirely optional."
              }
            </li>
            <li>
              {
                "Both you and the Recipient will only act on your own behalf. You may not submit a Payment Instruction on behalf of someone else."
              }
            </li>
            <li>
              {
                "In using the Service you will comply with this Agreement as well as any applicable laws, rules or regulations. It is a breach of this Agreement to use the Service to send Transfers in connection with illegal activity including but not limited to money-laundering, fraud and the funding of terrorist organisations."
              }
            </li>
            <li>
              {
                "When using the Service or when interacting with us, with another user or with a third party (in relation to the Service), you will not:"
              }
              <ol className="sub">
                <li>
                  {
                    "breach this Agreement, or any other agreement between you and us;"
                  }
                </li>
                <li>
                  {
                    "create more than one registration without our prior written permission;"
                  }
                </li>
                <li>{"provide false, inaccurate, or misleading information; or"}</li>
                <li>
                  {
                    "refuse to provide confirmation of any information you provide to us, including proof of identity, or refuse to co-operate in any investigation."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "If you think someone may be using your log in details or other security credentials without your permission, you must notify us immediately by contacting us at the details in the Contact section below."
              }
            </li>
          </ol>
        </section>

        {/* Section 6 */}
        <section className="section" id="section-6">
          <h2 className="leading-relaxed">{"6. OUR RIGHT TO REFUSE, SUSPEND OR CANCEL A PAYMENT INSTRUCTION OR THE SERVICES"}</h2>
          <ol className="clause section-6">
            <li>
              {
                "You agree that we may apply limits to the amount you are able to send to Recipients. We may do so either on a per Transfer basis or on an aggregate basis, and either in respect of one set of registration details or one Payment Instrument or on related sets of registration details or Payment Instruments."
              }
            </li>
            <li>
              {
                "We may refuse any Payment Instruction if we believe that:"
              }
              <ol className="sub">
                <li>
                  {
                    "it would put you over any Transfer limit we have in place or introduce;"
                  }
                </li>
                <li>
                  {
                    "it would violate this Agreement;"
                  }
                </li>
                <li>
                  {
                    "someone else is trying to make the Payment Instruction without your permission; or"
                  }
                </li>
                <li>
                  {
                    "you may be acting illegally or it would be against the law for us to allow the Transfer."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "We may suspend your use of the Service if we believe that:"
              }
              <ol className="sub">
                <li>
                  {
                    "someone else may be trying to use it without your permission; or"
                  }
                </li>
                <li>
                  {
                    "we are required to do so by law."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "In order to comply with our obligations under relevant laws, we reserve the right to ask for further information or evidence relating to a Payment Instruction."
              }
            </li>
            <li>
              {
                "We will generally inform you before or immediately after the rejection, suspension or cancellation of your Payment Instruction or use of the Services, and will provide our reasons for doing so. However, we will not provide reasons or any information if doing so would violate the law or compromise our security measures."
              }
            </li>
          </ol>
        </section>

        {/* Section 7 */}
        <section className="section" id="section-7">
          <h2>{"7. YOUR RIGHT TO CANCEL; REFUNDS"}</h2>
          <ol className="clause section-7">
            <li>
              {
                "To the extent permitted by law, once we have received your Payment Instruction, we will execute the Transfer immediately and you do not have the automatic right to revoke it (or change the details of the Payment Instruction). We will treat a Payment Instruction as received from you at the time that instruction is actually received by us, which will normally be at the time you confirm a Payment Instruction, whether or not that is during business hours."
              }
            </li>
            <li>
              {
                "You can request a refund of a Transfer within thirteen (13) months of the Transfer occurring if:"
              }
              <ol className="sub">
                <li>
                  {
                    "someone made a Payment Instruction without your permission; or"
                  }
                </li>
                <li>
                  {
                    "we fail to send a Transfer on time to the right Recipient account and for the right amount, as indicated on your confirmed Payment Instruction."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "We will also refund a Transfer if required by law, or if the issuer of your Payment Instrument requires it."
              }
            </li>
            <li>
              {
                "However, we may refuse your request for a refund if we can show that:"
              }
              <ol className="sub">
                <li>
                  {
                    "you have acted fraudulently;"
                  }
                </li>
                <li>
                  {
                    "you intentionally or with gross negligence did not take all reasonable steps to keep your log in details or other security credentials secret;"
                  }
                </li>
                <li>
                  {
                    "you are asking for a refund of a Transfer that took place before you told us that your log in was being misused;"
                  }
                </li>
                <li>
                  {
                    "the Recipient received the money into their account at the Service Provider; or"
                  }
                </li>
                <li>
                  {
                    "there was a mistake in the Recipient’s account details which you gave us."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "If you wish to request a refund, you should do so immediately and in any event no later than thirteen (13) months after the Transfer occurred. A request for a refund must be submitted in writing (including by email) to one of the contact points listed in the Contact section below, giving the Sender’s full name, address, and phone number, together with the Transfer tracking number, Send Amount, and the reason for your refund request."
              }
            </li>
            <li>
              {
                "If we have executed the Transfer in accordance with the instructions you have provided to us, and that information proves to have been incorrect, we are not liable for the incorrect execution of the Transfer. We will however make reasonable efforts to recover the funds. We may charge you a reasonable fee, reflective of our efforts, to do so."
              }
            </li>
            <li>
              {
                "Any refunds will be credited back by default to the Payment Instrument used to fund the Transfer, in the same currency used to fund the Transfer."
              }
            </li>
          </ol>
        </section>

        {/* Section 8 */}
        <section className="section" id="section-8">
          <h2>{"8. COLLECTION AND USE OF INFORMATION"}</h2>
          <ol className="clause section-8">
            <li>
              {
                "Customer Identification Program. We may require you to supply us with personal identifying information relating to you and the Recipient and we may also legally consult other sources to obtain information about you and the Recipient."
              }
            </li>
            <li>
              {
                "Verification and Checks. We may verify your residential address and personal details in order to confirm your identity. We may also pass your personal information to a credit reference agency, which may keep a record of that information. We may also need to verify the identity of a Recipient in the same way. All information provided by you will be treated securely and strictly in accordance with our Privacy Policy. By accepting this Agreement, you authorise us to make any inquiries we consider necessary to validate the information that you provide to us."
              }
            </li>
            <li>
              {
                "Data Processing and Transmission. You consent to our processing your personal information for the purposes of providing the Service, including for verification purposes as set out in this Clause. You also consent to the use of such data to enable us and our authorised third parties to communicate with you, and for statutory, accounting and archival purposes, in accordance with the terms of our Privacy Policy. You also consent to us transmitting your name, address, and date of birth along with your Payment Instruction to our Service Providers outside the European Economic Area, as we are required to do so by law. Full details are provided in our Privacy Policy."
              }
            </li>
            <li>
              {
                "Government Disclosures. We may be required by law to provide information about you, your use of the Service and your Payment Instructions to government or other competent authorities as described in our Privacy Policy. You acknowledge and consent to us doing this."
              }
            </li>
            <li>
              {
                "We may, as necessary in providing the Service, store all information required of a Recipient to prove his or her identity or associated with their specific Payment Instruction."
              }
            </li>
          </ol>
        </section>

        {/* Section 9 */}
        <section className="section" id="section-9">
          <h2>{"9. INTELLECTUAL PROPERTY"}</h2>
          <ol className="clause section-9">
            <li>
              {
                "The App and the Service, the content, and all intellectual property relating to them and contained in them (including but not limited to copyrights, patents, database rights, trademarks and service marks) are owned by us, our affiliates, or third parties. All right, title and interest in and to the Asanka Send website and the Service shall remain our property and/or the property of such other third parties."
              }
            </li>
            <li>
              {
                "The App and the Service may be used only for the purposes permitted by this Agreement or described on the website. You are authorised solely to view and to retain a copy of the pages of the Asanka Send App for your own personal use. You may not duplicate, publish, modify, create derivative works from, participate in the transfer or sale of, post on the internet, or in any way distribute or exploit the Asanka Send website, App, Service or any portion thereof for any public or commercial use without our express written permission. You may not: (i) use any robot, spider, scraper or other automated device to access the App or the Service; and/or (ii) remove or alter any copyright, trademark or other proprietary notice or legend displayed on the Asanka Send website (or printed pages of the website). The name “Asanka Send” and other names and indicia of ownership of Asanka Send’s products and/or services referred to on the Asanka Send website are our exclusive marks or the exclusive marks of other third parties. Other products, services and company names appearing on the website may be trademarks of their respective owners, and therefore you should not use, copy or reproduce them in any way."
              }
            </li>
          </ol>
        </section>

        {/* Section 10 */}
        <section className="section" id="section-10">
          <h2>{"10. ELECTRONIC COMMUNICATIONS"}</h2>
          <ol className="clause section-10">
            <li>
              {
                "You acknowledge that this Agreement shall be entered into electronically, and that the following categories of information (“Communications”) may be provided by electronic means:"
              }
              <ol className="sub">
                <li>
                  {
                    "this Agreement and any amendments, modifications or supplements to it;"
                  }
                </li>
                <li>
                  {
                    "your Transfer History through the Service;"
                  }
                </li>
                <li>
                  {
                    "any initial, periodic or other disclosures or notices provided in connection with the Service, including without limitation those required by law;"
                  }
                </li>
                <li>
                  {
                    "any customer service communications, including without limitation communications with respect to claims of error or unauthorised use of the Service; and"
                  }
                </li>
                <li>
                  {
                    "any other communication related to the Service or us."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "The Service does not allow for Communications to be provided in paper format or through other non-electronic means. You may withdraw your consent to receive Communications electronically, but if you do, your use of the Service shall be terminated. In order to withdraw your consent, you must contact us at the details in the Contact section below."
              }
            </li>
            <li>
              {
                "Copy of Agreement: This Agreement is available for you to review at any time via the App or on our website. We will email a copy of these terms to you when you first register for the Service. You can also ask us to email you a copy of these terms (including any modifications) at any time."
              }
            </li>
            <li>
              {
                "Transfer History: Each month, we will email you at the email address you have provided, notifying you that your monthly Transfer History is ready for viewing via the App. You may also download the Transfer History from the App for your own records."
              }
            </li>
            <li>
              {
                "Security: If we have to contact you because of a suspected or actual fraud or security threat, we will do it by calling or texting your mobile number."
              }
            </li>
          </ol>
        </section>

        {/* Section 11 */}
        <section className="section" id="section-11">
          <h2>{"11. WARRANTIES AND LIABILITY"}</h2>
          <ol className="clause section-11">
            <li>
              {
                "Where we have materially breached this Agreement causing a loss to you, we will refund you the Send Amount and any Service Fee charged. Any claim for compensation made by you must be supported by any available relevant documentation."
              }
            </li>
            <li>
              {
                "If any loss that you suffer is not covered by a right to payment under Clause 7, we expressly limit our liability for that loss to the greater of: (i) the amount of any Service Fee that was paid to us; and (ii) €500. This liability cap applies to any single Transfer, act, omission or event and to any number of related Transfer, acts, and omissions or events."
              }
            </li>
            <li>
              {
                "We do not, in any event, accept responsibility for damages as a result of:"
              }

              <ol className="sub">
                <li>
                  {
                    "any failure to perform the Service as a result of circumstances which could reasonably be considered to be due to abnormal and unforeseen circumstances outside our reasonable control, which may for example include delays or failures caused by problems with another system or network (including those of our Service Providers), mechanical breakdown or data-processing failures;"
                  }
                </li>
                <li>
                  {
                    "us meeting our obligations under any applicable laws, rules or regulations; or"
                  }
                </li>
                <li>
                  {
                    "errors on the website or with the Service caused by incomplete or incorrect information provided to us by you or a third party."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "Notwithstanding anything in this Agreement to the contrary, we shall not be liable under any theory of tort, contract, unjust enrichment, strict liability or other legal or equitable theory for lost profits, lost revenues, lost business opportunities, exemplary, punitive, special, incidental, indirect or consequential damages, each of which is excluded by us, regardless of whether or not we had foreseen, or could have foreseen, or has been advised of, the possibility of such damages."
              }
            </li>
          </ol>
        </section>

        {/* Section 12 */}
        <section className="section" id="section-12">
          <h2>{"12. MODIFICATIONS"}</h2>
          <ol className="clause section-12">
            <li>
              {
                "We can make a change to this agreement for any of the following reasons:We can make a change to this agreement for any of the following reasons:"
              }
              <ol className="sub">
                <li>
                  {
                    "because of a change in legal or regulatory requirements;"
                  }
                </li>
                <li>
                  {
                    "if the change benefits you;"
                  }
                </li>
                <li>
                  {
                    "to reflect a change in our costs of providing you with the Service;"
                  }
                </li>
                <li>
                  {
                    "in response to possible risks to the security of your use of the Service; or"
                  }
                </li>
                <li>
                  {
                    "to respond to any other change that affects us, if it is fair to pass on the effects of the change to you."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "We may make reasonable and proportionate changes for any other reason we cannot foresee, for example to respond to changes in our industry that affect how we wish to deliver our Service to you."
              }
            </li>
            <li>
              {
                "We will tell you about a change to this Agreement at least two (2) months before it takes effect. You may object to the change before it takes effect, which will end the Agreement. If you do not object to the change, we will take that as your acceptance of the change."
              }
            </li>
            <li>
              {
                "You will be notified of any upcoming changes to this Agreement via announcements sent to the email address you have provided."
              }
            </li>
          </ol>
        </section>

        {/* Section 13 */}
        <section className="section" id="section-13">
          <h2>{"13. TERMINATION"}</h2>
          <ol className="clause section-13">
            <li>
              {
                "This Agreement will continue until you or we terminate it."
              }
            </li>
            <li>
              {
                "You can terminate this Agreement free of charge, at any time our customer-support team is open, by contacting us at the details in the Contact section below."
              }
            </li>
            <li>
              {
                "We can terminate this Agreement and your access to the Service at any time, with two (2) months’ notice."
              }
            </li>
            <li>
              {
                "We can terminate this Agreement your access to the Service without prior notice if:"
              }
              <ol className="sub">
                <li>
                  {
                    "we reasonably believe you are using the Service fraudulently or illegally; or"
                  }
                </li>
                <li>
                  {
                    "we have to do so by law."
                  }
                </li>
              </ol>
            </li>
            <li>
              {
                "We will inform you of a termination as soon as it can, if the law allows us to do so."
              }
            </li>
            <li>
              {
                "In the event of termination, we will cease processing any further Payment Instructions upon receipt of the notice of termination, but will continue processing Payment Instructions that were submitted and are still pending prior to such receipt. Your payment obligations to us will survive the termination of this Agreement."
              }
            </li>
          </ol>
        </section>

        {/* Section 14 */}
        <section className="section" id="section-14">
          <h2>{"14. COMPLAINTS/COMPENSATION"}</h2>
          <ol className="clause section-14">
            <li>
              {
                "If you have a complaint related to your use of the Service, please email us at the details in the Contact section below. We will acknowledge receiving your complaint within 5 business days."
              }
            </li>
            <li>
              {
                "We will do our best to resolve your complaint as soon as possible, and send you a final response by email within 15 days of receiving the complaint. If, in exceptional circumstances, for reasons beyond our control, we need more time to respond, we will send you a holding reply within 15 days of receiving your complaint to let you know when you will receive our final response. The final response will be no later than 35 days from the date on which we first received your complaint."
              }
            </li>
            <li>
              {
                "If you do not receive our final response on time, or you are unhappy with our final response, you may be entitled to refer your complaint to the Financial Ombudsman Service, details of which are available at http://www.financialombudsman.org.uk/consumer/complaints.htm. You can also call them on 0800 023 4567 or tell them about a complaint online (via https://help.financial-ombudsman.org.uk/help). Please note that the ombudsman may not consider a complaint if you have not provided us with the opportunity to resolve it previously."
              }
            </li>
            <li>
              {
                "Alternatively, you may be able to submit your complaint via the European Commission’s Online Dispute Resolution platform, which can be found at http://ec.europa.eu/consumers/odr/."
              }
            </li>
            <li>
              {
                "Your use of the Service does not qualify for protection under the UK Financial Services Compensation Scheme (FSCS)."
              }
            </li>
          </ol>
        </section>

        {/* Section 15 */}
        <section className="section" id="section-15">
          <h2>{"15. GENERAL"}</h2>
          <ol className="clause section-15">
            <li>
              {
                "Governing Law: This Agreement is governed by English law. Any dispute between you and us in connection with the Service and/or this Agreement may be brought in the courts of England and Wales."
              }
            </li>
            <li>
              {
                "No Third Party Rights: This Agreement does not give rise to any rights under the Contracts (Rights of Third Parties) Act 1999 (or any other equivalent legislation) to enforce any term of this Agreement."
              }
            </li>
            <li>
              {
                "Waiver: No waiver of any provision hereof will be effective unless made in writing and signed by the waiving Party. The failure of any Party to require the performance of any term or obligation of this Agreement, or the waiver by any Party of any breach of this Agreement, will not prevent any subsequent enforcement of such term or obligation or be deemed a waiver of any subsequent breach of this Agreement."
              }
            </li>
            <li>
              {
                "Transfer of rights: You may not transfer any of your rights or obligations under this Agreement. We may transfer, assign, and/or novate this Agreement and/or any of our rights under this Agreement at any time without your consent. This does not affect your right to terminate this agreement under Clause 13."
              }
            </li>
            <li>
              {
                "Entire Agreement: This Agreement constitutes the entire agreement between the Parties and supersedes all prior understandings, agreements, or representations by or between the Parties, or any of them, written or oral, with respect to the subject matter of this Agreement."
              }
            </li>
            <li>
              {
                "Severability: If any provision of this Agreement is held invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions will not be affected or impaired in any way, and you agree to accept a replacement of such invalid, illegal and unenforceable provision with a valid, legal and enforceable provision that achieves, to the greatest lawful extent under this Agreement, the economic, business and other purposes of such invalid, illegal or unenforceable provision."
              }
            </li>
          </ol>
        </section>

        {/* Footer / Contact */}
        <footer>
          <h2>{"Contact Information"}</h2>
          <ul className="mt-0 space-y-3 list-none p-0">
            <li className="flex items-center gap-3 text-sm text-slate-500">
              <Phone size={16} className="text-[#05dfa9] shrink-0" />
              <a href="tel:+443333031342" className="text-slate-500 no-underline hover:text-[#05dfa9] hover:underline transition-colors">
                {"+ (44) 33 3303 1342"}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-500">
              <Mail size={16} className="text-[#05dfa9] shrink-0" />
              <a href="mailto:info@asankasend.com" className="text-slate-500 no-underline hover:text-[#05dfa9] hover:underline transition-colors">
                {"info@asankasend.com"}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-500">
              <MapPin size={16} className="text-[#05dfa9] shrink-0" />
              <span>{"Suite 1 Park Plaza, Heath Hayes, Cannock, England, WS12 2DD"}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-500">
              <Clock size={16} className="text-[#05dfa9] shrink-0" />
              <span>{"Mon\u2013Fri\u00a0: 8am \u2013 5pm GMT"}</span>
            </li>
          </ul>
        </footer>

      </main>
    </div>
  );
}

export function TermsAndConditionsDialog({
  trigger,
}: {
  trigger?: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant="link"
            className="h-auto px-0 font-medium text-asanka-accent-muted underline transition-colors hover:text-asanka-secondary text-sm"
          >
            Terms & Conditions
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="terms-scope terms-dialog flex h-[min(90dvh,880px)] w-[min(928px,calc(100vw-1.5rem))] max-w-[min(928px,calc(100vw-1.5rem))] flex-col gap-0 overflow-hidden border-border p-0 sm:max-w-[min(928px,calc(100vw-2rem))]"
        aria-labelledby="terms-title"
      >
        <DialogTitle className="sr-only">{"Terms & Conditions"}</DialogTitle>
        <div className="overflow-y-auto overflow-x-hidden max-h-[85vh]">
          <TermsAndConditionsDocument />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TermsAndConditionsDialog;