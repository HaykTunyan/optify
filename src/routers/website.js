import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import withContainer from 'hocs//withContainer';
import withLazy from 'hocs/withLazy';
import { PATHS } from 'common';

const Homepage = withLazy(import('app/website/Homepage/index'));
const About = withLazy(import('app/website/AboutUs/index'));
const EmailVerifer = withLazy(import('app/website/EmailVerifer'));
const EmailFinder = withLazy(import('app/website/EmailFinder'));
const Pricing = withLazy(import('app/website/Pricing'));
const GuestPost = withLazy(import('app/website/GuestPost'));
const LinkBulding = withLazy(import('app/website/LinkBuilding'));
const BrokenLink = withLazy(import('app/website/BrokenLink'));
const TestEmails = withLazy(import('app/website/TestEmails'));
const Mailing = withLazy(import('app/website/Mailing'));
const ChooseTemplate = withLazy(import('app/website/ChooseTemplate'));
const PrivacyPolicy = withLazy(import('app/website/PrivacyPolicy'));
const TermsConditions = withLazy(import('app/website/TermsConditions'));
const Test = withLazy(import('app/website/Test'));
const PaymentDetails = withLazy(import('app/website/PaymentDetails'));
// modal
const CooperationFinder = withLazy(import('components/CooperationFinder'));
// const DirectExchange = withLazy(import('components/DirectExchange'));
const ChooseKeywords = withLazy(import('components/ChooseKeywoords'));
const TestTemplate = withLazy(import('components/TestTemplate'));
const CreateNewTemplate = withLazy(import('components/CreateNewTemplate'));
const AddKeyword = withLazy(import('components/modals/AddKeyword'));
const AddLabel = withLazy(import('components/modals/AddLabel'));
const Statistics = withLazy(import('components/modals/Statistics'));
const CooperationSuccess = withLazy(import('components/modals/CooperationSuccess'));
const NewCampaign = withLazy(import('components/modals/NewCampaign'));

const UnsubscribersList = withLazy(import('components/UnsubscribersList'));
//blog
const Blog = withLazy(import('app/website/Blog'));
const Article = withLazy(import('app/website/Article'));

// auth
const SignIn = withLazy(import('components/authorization/SignIn'));
const SignUp = withLazy(import('components/authorization/SignUp'));
const ForgotPassword = withLazy(import('components/authorization/ForgotPassword'));
const ResetPassword = withLazy(import('components/authorization/ResetPassword'));
const SignOut = withLazy(import('components/authorization/SignOut'));
const Verify = withLazy(import('components/authorization/Verify'));
const Page404 = withLazy(import('components/_404'));

// declare routes
export const generalRoutes = [
  { path: PATHS.HOMEPAGE, exact: true, component: Homepage, isMenuItem: false, t_key: 'homepage' },
  { path: PATHS.SIGN_OUT, component: SignOut, isMenuItem: false, t_key: 'sign_out' },
  {
    path: PATHS.RESET_PASSWORD,
    component: ResetPassword,
    isMenuItem: false,
    t_key: 'reset_password',
  },
  {
    path: PATHS.VERIFY,
    component: Verify,
    isMenuItem: false,
    t_key: 'verify',
  },
  {
    path: PATHS.MAIL_LIST,
    component: Mailing,
    isMenuItem: true,
    isPrivate: true,
    t_key: 'my_emails',
  },

  {
    isMenuItem: true,
    isDropdown: true,
    exclude: true,
    options: [
      { t_key: 'guest_post', path: PATHS.GUEST_POST },
      { t_key: 'link_building', path: PATHS.LINK_BUILDING },
      { t_key: 'broken_link', path: PATHS.BROKEN_LINK },
    ],
    t_key: 'outreach',
  },
  {
    path: PATHS.EMAIL_FINDER,
    component: EmailFinder,
    isMenuItem: true,
    t_key: 'email_finder',
  },
  {
    path: PATHS.EMAIL_VERIFER,
    component: EmailVerifer,
    isMenuItem: true,
    t_key: 'email_verifer',
  },

  {
    path: PATHS.GUEST_POST,
    component: GuestPost,
    t_key: 'guest_post',
  },
  {
    path: PATHS.LINK_BUILDING,
    component: LinkBulding,
    t_key: 'link_building',
  },
  {
    path: PATHS.BROKEN_LINK,
    component: BrokenLink,
    t_key: 'broken_link',
  },
  {
    t_key: 'about_us',
    path: PATHS.ABOUT_US,
    component: About,
    isFooterItem: true,
  },
  {
    t_key: 'blog',
    path: PATHS.BLOG,
    component: Blog,
    isFooterItem: true,
  },
  {
    t_key: 'article',
    path: PATHS.ARTICLE,
    component: Article,
    isFooterItem: false,
  },
  {
    t_key: 'privacy_policy',
    path: PATHS.PRIVACY_POLICY,
    component: PrivacyPolicy,
    isFooterItem: true,
  },
  {
    t_key: 'terms_conditions',
    path: PATHS.TERMS_CONDITIONS,
    component: TermsConditions,
    isFooterItem: true,
  },
  {
    t_key: 'template',
    path: PATHS.CHOOSE_TEMPLATE,
    component: ChooseTemplate,
  },
  {
    path: PATHS.PRICING,
    component: Pricing,
    isMenuItem: true,
    isFooterItem: true,
    t_key: 'pricing',
  },
  {
    path: PATHS.TEST_EMAILS,
    component: TestEmails,
    t_key: 'test_emails',
  },
  {
    path: PATHS.PAYMENT_DETAILS,
    component: PaymentDetails,
    t_key: 'test_emails',
  },

  { path: PATHS.NOT_FOUND, exact: true, component: Page404 },
  { path: '/test', component: Test },
];

const onlyMobileRoutes = [
  {
    path: PATHS.SIGN_IN,
    component: withContainer(SignIn),
    t_key: 'sign_in',
  },
  {
    path: PATHS.SIGN_UP,
    component: withContainer(SignUp),
    mobileOnly: true,
    t_key: 'sign_up',
  },
  {
    path: PATHS.FORGOT_PASSWORD,
    component: withContainer(ForgotPassword),
    t_key: 'forgot_password',
  },
  {
    path: PATHS.COOPERATION_FINDER,
    component: withContainer(CooperationFinder),
    t_key: 'cooperation_finder',
  },
  {
    path: PATHS.CHOOSE_KEYWORDS,
    component: withContainer(ChooseKeywords),
    t_key: 'choose_keywords',
  },
  {
    path: PATHS.TEST_TEMPLATE,
    component: withContainer(TestTemplate),
    t_key: 'test_template',
  },
  {
    path: PATHS.CREATE_NEW_TEMPLATE,
    component: withContainer(CreateNewTemplate),
    t_key: 'new_template',
  },
  {
    path: PATHS.ADD_KEYWORD,
    component: withContainer(AddKeyword),
    t_key: 'add_keyword',
  },
  {
    path: PATHS.ADD_LABEL,
    component: withContainer(AddLabel),
    t_key: 'add_label',
  },
  {
    path: PATHS.STATISTICS,
    component: withContainer(Statistics),
    t_key: 'statistics',
  },
  {
    path: PATHS.COOPERATION_SUCCESS,
    component: withContainer(CooperationSuccess),
    t_key: 'cooperation_success',
  },
  {
    path: PATHS.UNSUBSCRIBERS_LIST,
    component: withContainer(UnsubscribersList),
    t_key: 'unsubscribers_list',
  },
  {
    path: PATHS.NEW_CAMPAIGN,
    component: withContainer(NewCampaign),
    t_key: 'new_campaign',
  }
];

const redirects = [
  {
    from: undefined,
    to: '/404',
  },
];

const WebsiteRouter = ({ isMobile }) => {
  const [routesToDraw, setRoutes] = useState([]);
  const screenSizeChecked = !isNaN(Number(isMobile));

  // check to draw desktop || mobile routes
  useEffect(() => {
    if (screenSizeChecked) {
      const routes = generalRoutes.filter((route) => !route.exclude);
      if (isMobile) {
        setRoutes([...routes, ...onlyMobileRoutes]);
      } else {
        setRoutes(routes);
      }
    }
  }, [screenSizeChecked, isMobile]);

  const Routes = () =>
    routesToDraw.length
      ? routesToDraw.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={() => <route.component />}
          />
        ))
      : null;

  const Redirects = () =>
    routesToDraw.length ? redirects.map((rd) => <Redirect from={rd.from} to={rd.to} />) : null;

  return (
    <Switch>
      <Routes />
      <Redirects />
    </Switch>
  );
};

export default WebsiteRouter;
