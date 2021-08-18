import React, { useEffect, useState } from 'react';
import withLazy from 'hocs/withLazy';
import { PATHS } from 'common';
const MailingBody = withLazy(import('app/website/Mailing/Body/'));
const MAilin = withLazy(import('app/website/Mailing/Body/Email'));

const mailingRoutes = [
  {
    t_key: 'mailing',
    path: PATHS.MAIL_LIST,
    component: Mailing,
  },
  {
    t_key: 'single_email',
    path: PATHS.MAIL_SINGLE,
    component: EmailContent,
  },
];
