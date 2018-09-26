import React from 'react';
import { translate, Trans } from 'react-i18next';
import { Header, Container } from 'semantic-ui-react';
import Button from '~/modules/coreUI/components/basic/Button';
import { Row } from '~/modules/coreUI/components/layouts/helpers/LinearLayout';
// import Newsletter from '~/modules/modulesDocs/dev-test/sample.relayForm';
import TextBox from '~/modules/coreUI/components/basic/TextBox';
import CountriesDropdown from '~/modules/coreUI/components/compound/CountriesDropdown';
import DatePicker from '~/modules/coreUI/components/compound/datePicker/DatePicker';

const HomePage = () =>
  (
    <React.Fragment>
      <Container>
        <br />
        <Header size="huge">
          <Trans i18nKey="metadata.displayName" />
        </Header>
        <Header.Subheader>
          <Trans i18nKey="metadata.description" />
        </Header.Subheader>
        <br />
        <Row>
          <Button loading>Hello</Button>
        </Row>
        <br />
      </Container>

      <h3>I love BADR :)</h3>
      <TextBox />
      {/* <Newsletter /> */}
      <CountriesDropdown />
      <DatePicker />
    </React.Fragment>
  );

export default translate('modulesDocs')(HomePage);
