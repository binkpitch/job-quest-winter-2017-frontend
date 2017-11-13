import React from 'react'
import { storiesOf } from '@storybook/react'
import '../src/index.css'

import ReactMarkdown from 'react-remarkable'
import { Button, TextInsideBox, TextArea, MarkdownBox, TextInput, Text } from '../src/component/styledComponent'

storiesOf('Styled Component', module)
  .add('Button', () => [
    <div>
      <Button color='green'>Open Issue</Button>
    </div>,
    <div>
      <Button color='red'>Close Issue</Button>
    </div>,
    <div>
      <Button color='gray'>Back</Button>
    </div>,
    <div>
      <Button>Back</Button>
    </div>
  ])
  .add('Text inside Box', () => [
    <TextInsideBox header>is:issue is:open</TextInsideBox>,
    <TextInsideBox>onDrop breaks onSelect event </TextInsideBox>,
    <TextInsideBox disabled>(Closed) onDrop breaks onSelect event </TextInsideBox>
  ])
  .add('Text Area', () => [
    <div style={{ height: '60vh' }}>
      <TextArea
        defaultValue={
`**What is the current behavior?**


**What is the expected behavior?**

`
        }
      />
    </div>
  ])
  .add('Markdown', () => [
    <div style={{ height: '60vh' }}>
      <MarkdownBox>
        <ReactMarkdown source={`
**What is the current behavior?**
      
      
**What is the expected behavior?**
          
`
            }
          />
      </MarkdownBox>
    </div>
  ])
  .add('Text Input', () => [
    <TextInput placeholder='Title...' />
  ])
  .add('Text', () => [
    <Text>Are you sure you want to delete this issue?</Text>,
    <Text size='medium'>New Issue</Text>
  ])
