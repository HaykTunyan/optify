import { data } from 'store/reducers/mailing/emails';

const mailing = (state) => ({
  emails: state.mailingR.emails,
  emailById: (id) => data.find((item) => item.id === Number(id)),
  labels: state.mailingR.labels,
  emailsByLabel: (labelId) => state.mailingR.emails.data.filter((m) => m.parentId === labelId),
});

export default mailing;
