import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import {
Grid,
List,
Loader,
Dimmer,
Placeholder,
Segment,
Button,
Divider,
Header,
Icon,
Input,
Image,
Search
} from "semantic-ui-react";

class App extends Component {
  render(){
    return(
      <div>
      <br />

        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable textAlign='center'>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header as='h2' icon>
                <Icon name='search' />
                Cari Document
              </Header>
              <p><Search placeholder='Cari Dokument' /></p>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2' icon>
                <Icon name='file pdf outline' />
                Tambah Document Baru
              </Header>
              <Button primary content='Sign up' icon='signup'>Create Document</Button>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
        <br />
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>

        <br />

        <Grid>
          <Grid.Column width={5}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
          <List>
              <Header as='h3'>Website Terkait</Header>
             <List.Item icon='linkify' content={<a href='#'>Google</a>} />
             <List.Item icon='linkify' content={<a href='#'>facebook</a>} />
             <List.Item icon='linkify' content={<a href='#'>semantic ui</a>} />
             <List.Item icon='linkify' content={<a href='#'>Niomic</a>} />
             <List.Item icon='linkify' content={<a href='#'>react</a>} />
           </List>
          </Grid.Column>
        </Grid>

        <Segment.Group>
          <Segment.Group horizontal>



          </Segment.Group>
        </Segment.Group>

      </div>
    )
  }
}
export default App;
