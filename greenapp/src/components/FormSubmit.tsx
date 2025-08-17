import React from 'react';
import { NextRouter, withRouter } from 'next/router';
import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import { SitecoreForm } from '@sitecore-jss/sitecore-jss-forms';
import { sitecoreApiHost, sitecoreApiKey } from '../temp/config';

interface JssNextFormProps {
  fields: SitecoreForm;
  router: NextRouter;
}

const JssNextForm: React.FC<JssNextFormProps> = ({ fields, router }) => (
  <Form
    form={fields}
    sitecoreApiHost={sitecoreApiHost}
    sitecoreApiKey={sitecoreApiKey}
    onRedirect={(url: string) => router.push(url)}
  />
);

export default withRouter(JssNextForm);
