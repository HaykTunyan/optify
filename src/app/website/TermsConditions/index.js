import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title, Text } from 'style-guide';
import { Helmet } from 'react-helmet-async';

const TermsConditions = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{`${t('terms_conditions')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='my-10'>
        <Container.Base>
          <div className='shadow-layout rounded-22'>
            <div className='px-8 py-5 text-dark text-justify'>
              <Title.Base children={t('terms_conditions')} />
            </div>
            <div className='w-full h-1px bg-divider' />
            <div className='p-8'>
              <Title.Base children='Introduction' />
              <p>
                <Text.SM>
                  Optify provides hosted application services (<b>“Services”</b>) to its customers.
                  Optify owns and operates Optify.ai
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  These Terms and Conditions of Use constitute a contractual agreement between you
                  and Optify regarding your use of the Optify services and website and any
                  activities or transactions you may conduct through the Optify or optify.ai
                  websites.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Optify reserves the right to modify, alter, or otherwise update these Terms and
                  Conditions at any time. Optify will post changes at this site, so you are
                  encouraged to review these Terms and Conditions from time to time.
                  <b>
                    Your continued use of the Optify website and/or Services following the posting
                    of changes to these Terms and Conditions will constitute your acceptance of any
                    and all posted changes.
                  </b>
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children=' Terms and Conditions of Optify' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  This agreement is between you, the subscriber to the Optify service, and Optify
                  who hosts the Optify service.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Fulfillment & Delivery' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  For self-service batch services, results are usually delivered within 24 hours.
                  This can be longer if there is particularly busy load on the servers.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  We offer online services only. There are no physical products to ship or software
                  to download
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Seven Day Money Back Guarantee Period' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  The Optify money-back period is for 7 days and is for{' '}
                  <b>self-service batch services</b>
                  If you do not wish to continue with the service, you must cancel within the 7 day
                  period by canceling your subscription in your Optify account and contacting Optify
                  requesting a refund. Please supply your email address and (optional) reason for
                  cancellation for our customer service records.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Month to Month Term for Subscription Accounts' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  After the service setup is complete, your account will be automatically renewed on
                  a month to month basis at the then-current monthly subscription rate. There is a
                  2-month minimum term of service. You may cancel the service at any time after the
                  minimum term of service by contacting support within your Optify account. Service
                  is billed each service month (based on the day of the month you signed up for
                  service) for the following month and we cannot give any refunds for a partial
                  month’s service.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Security and Reliability' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  The security and reliability of the Optify service is our highest priority. Optify
                  works hard to run a solid, hassle-free service. However, there are times when we
                  cannot guarantee 100% reliability:
                </Text.SM>
              </p>
              <ul className='list-inside list-disc pl-10'>
                <li>
                  <Text.SM>Internet congestion</Text.SM>
                </li>
                <li>
                  <Text.SM>Automatic System Updates</Text.SM>
                </li>
                <li>
                  <Text.SM>Terrorist attack</Text.SM>
                </li>
                <li>
                  <Text.SM>Virus/Worm/Denial of Service Attack</Text.SM>
                </li>
              </ul>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  You specifically agree that Optify cannot be held liable for any missing data,
                  corrupted data, incorrect transmission of data, failure to provide service, delay
                  of service provision, or anything in any way connected to the Optify service in
                  excess of the cost of service provided. Cumulative liability of Optify to a
                  customer shall not exceed the total monthly service fee of the immediate prior one
                  month of service.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Optify will only use the data passed by the Client for the sole purpose of
                  verifying the email address and will not do anything else with the data other than
                  outlined by the Client.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Accuracy of Optify' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Checking of email addresses is a complex process involving our servers
                  communicating with external mail servers. A service of this nature cannot be 100%
                  accurate due to factors outside of our control such as:
                </Text.SM>
              </p>
              <ul className='list-inside list-disc pl-10'>
                <li>
                  <Text.SM>Email server down or not contactable</Text.SM>
                </li>
                <li>
                  <Text.SM>No mail servers defined for a domain</Text.SM>
                </li>
                <li>
                  <Text.SM>Email server busy</Text.SM>
                </li>
                <li>
                  <Text.SM>Mail box is full / exceeds quota</Text.SM>
                </li>
                <li>
                  <Text.SM>
                    Mail sever responds with incorrect data. Specifically, mail servers that are
                    configured to always respond that an email address exists (whether, in reality,
                    it does or not)
                  </Text.SM>
                </li>
              </ul>
              <p>
                <Text.SM>
                  Other factors that can adversely affect accuracy include non-standard mail server
                  implementations such as:
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Incorrect Responses From Mail Servers' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Some mail servers are configured to report “valid” email boxes regardless of
                  whether they exist or not. These “false positive” results may indicate a mailbox
                  is valid when, in fact, it is not.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Examples of these types of mail servers include (but not limited to) some
                  installations of Microsoft Exchange Server. We do our best to identify these types
                  of servers with a “Blocked/rejected” status but cannot guarantee that this flag is
                  applied in 100% of cases.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  In the case of these “false positive” results, the only way of establishing a
                  mailbox validity is by sending an email to the recipient and asking them to
                  respond.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Issues With Various “Free” WebMail Providers' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  The following web based email providers have been known to issue incorrect
                  responses to Optify. Examples of these are:
                </Text.SM>
              </p>
              <ul className='list-inside list-disc pl-10'>
                <li>
                  <Text.SM>AltaVista</Text.SM>
                </li>
                <li>
                  <Text.SM>Yahoo</Text.SM>
                </li>
                <li>
                  <Text.SM>Hotmail / Live / MSN</Text.SM>
                </li>
              </ul>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  You agree and understand that our Optify services cannot, therefore, be 100%
                  accurate.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Issues with other mail providers or Internet Service Providers (ISPs)' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Some email servers and/or ISPs implement extremely aggressive anti-spam policies.
                  These policies can prevent our service from establishing the required network
                  connection to allow email address checking. Where possible, we mark these services
                  with a “blocked/rejected” status but cannot guarantee this in 100% of cases.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Stated Accuracy' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Even with the external factors listed above, our Optify services have been
                  carefully engineered to deliver the best possible accuracy of any solution on the
                  market. Therefore, we state our accuracy figures as between <b>90 to 95%</b> based
                  on a typical list of email addresses.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  In testing, we were able to achieve our stated accuracy on a repeatable basis and
                  using several different email lists in excess of 1,000 email addresses per list.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Transmission of Data' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  You agree that Optify is not responsible for any unauthorized access or
                  modification of your data stored by or transmitted via the Optify service. You
                  also agree that Optify is not responsible or liable for any content sent using, or
                  received from, the Optify service including that which may be illegal, obscene,
                  defamatory, threatening or that may violate any trademark or copyright
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Passwords' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  It is the end-users’ responsibility to keep their passwords confidential and to
                  change the password on a regular basis. Optify is not responsible for any data
                  losses or security issues due to stolen passwords. Optify strongly recommends that
                  you choose strong passwords that contain numbers and symbols in order to prevent
                  unauthorized users from guessing commonly-used choices (i.e. “12345”, “password”,
                  etc.). Optify support does not have access to view existing passwords. The Optify
                  dashboard allows you to change your password at any time.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Lost passwords can be retrieved by email by clicking the “Send me my password”
                  link on the login screen.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Acceptable Use Policy' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  We have adopted a philosophy that assumes the honesty and good intent of our
                  customers, therefore our services are provided in as unrestricted a manner as
                  possible to allow our users to have the richest experience possible.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  This Acceptable Use Policy may be revised, without notice, at any time. Completion
                  of the relevant application form, or connection to the service for the first time,
                  is deemed to be an agreement to our Terms and Conditions and Acceptable Use
                  Policies.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  In the event of a breach of this policy, we reserve the right to terminate your
                  service with immediate effect, without recompense, and delete any files held on
                  our servers.
                </Text.SM>
              </p>
              <div className='pt-4' />
              <p>
                <Text.SM>
                  As Network Administrators, we reserve the right to monitor any or all network
                  traffic at any time and for whatever reason at our sole discretion without notice
                  or notification as we may deem appropriate.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Optify Accounts' />
              <div className='pt-4' />
              <ol className='list-decimal list-inside pl-10'>
                <li>
                  <Text.SM>
                    Accounts are granted to you as an individual customer. You may not share your
                    account or divulge your login details to third parties.
                  </Text.SM>
                </li>
                <li>
                  <Text.SM>
                    Automated submissions (e.g. via automated scripts or ‘bots’) are not permitted.
                  </Text.SM>
                </li>
                <li>
                  <Text.SM>
                    You are not permitted to use any of our services for malicious or intrusive
                    purposes with a view to breaching other people’s privacy rights.
                  </Text.SM>
                </li>
              </ol>
              <div className='pt-8' />
              <Title.Base children='Cancelled Accounts' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Upon cancellation, your Optify account and contact data located on Optify’s
                  servers may no longer be available. It is the end user’s responsibility to
                  retrieve this data prior to the request for cancellation of the service. Optify
                  cannot guarantee retrieval of data once an account is canceled.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Ownership and Restrictions' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  The Customer acknowledges that Optify and its suppliers own all rights in the
                  Optify service, including without limitation all Intellectual Property Rights.
                  Except for the License granted in this Agreement, all rights in the Optify service
                  are reserved. There are no implied licenses granted. The Optify service and its
                  structure, organization, source code, and Documentation contain valuable trade
                  secrets of the Optify service and its licensors, and accordingly, Customer agrees
                  not to (and agrees not to allow third parties to) (1) sublicense, lease, rent,
                  loan, transfer, or distribute the Optify service or any derivative thereof to any
                  third party, (2) modify, adapt, translate, or prepare derivative works from the
                  Optify service, (3) decompile, reverse engineer, disassemble or otherwise attempt
                  to derive source code from the Optify service, (4) extract portions of the
                  Optify’s files for use in other applications, or (5) remove, obscure, or alter
                  Optify service’s or any third party’s Trademarks or copyright or other proprietary
                  rights notices affixed to or contained within or accessed in conjunction with or
                  through the Optify service.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Audit' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  Optify shall have the right to audit Customer’s usage of the Optify service to
                  confirm compliance with the Terms and the Agreement. Should such audit indicate
                  usage of Software inconsistent with the Terms or the Agreement, in addition to any
                  other rights Optify may have for breach, Customer shall promptly reconcile its
                  account with Optify and pay the Optify invoice, if any, that results from such
                  reconciliation.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Warranty' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  The software is provided “as is”, with no warranties whatsoever, Optify expressly
                  disclaims to the fullest extent permitted by law all express, implied and
                  statutory warranties of merchantability, fitness for a particular purpose, title
                  and non-infringement of proprietary rights and any warranties regarding the
                  security, reliability timeliness and performance of the software. The Optify
                  software is not intended for use in connection with any nuclear, aviation, mass
                  transit or medical application or other inherently dangerous application that
                  could result in death, personal injury, catastrophic damage or mass destruction.
                  Optify shall have no liability of any nature if you use the software in connection
                  with such activities.
                </Text.SM>
              </p>
              <div className='pt-8' />
              <Title.Base children='Terms that apply to all customers' />
              <div className='pt-4' />
              <Title.Base children='Limited Liability' />
              <div className='pt-4' />
              <p>
                <Text.SM>
                  In no event will Optify be liable for any indirect, special, incidental or
                  consequential damages, whether in an action in contract or tort, even if advised
                  of the possibility of such damages. The total liability of Optify Ltd for any
                  claims arising from or in connection with this agreement or service, regardless of
                  the form of action, shall not exceed the amount of services fees paid by you
                  either directly to Optify or through a partner/reseller for service rendered for
                  the immediately prior one (1) month of billing.
                </Text.SM>
              </p>
            </div>
          </div>
        </Container.Base>
      </div>
    </Fragment>
  );
};

export default TermsConditions;
