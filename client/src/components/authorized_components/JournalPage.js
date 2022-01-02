import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import parse from 'html-react-parser'


import { Menu, Dropdown, Grid, Segment, Form, Button, } from 'semantic-ui-react'


function JournalPage(){

    const [text, setText] = useState('')
   

    const options = [
        { key: 1, text: 'Happy', value: 1 },
        { key: 2, text: 'Sad', value: 2 },
        { key: 3, text: 'Angry', value: 3 },
        { key: 4, text: 'Excited', value: 4 },
        { key: 5, text: 'Overwhelmed', value: 5 },
        { key: 6, text: 'Depressed', value: 6 },
        { key: 7, text: 'Anxious', value: 7 },
        { key: 8, text: 'Nervous', value: 8 },
        { key: 9, text: 'Frustrated', value: 9 },
        { key: 10, text: 'Distracted', value: 10 },
        { key: 11, text: 'Jealous', value: 11 },
        { key: 12, text: 'Hopeless', value: 12 },
        { key: 13, text: 'Exhausted', value: 13 },
        { key: 14, text: 'Lonely', value: 14 },
        { key: 15, text: 'Embarrassed', value: 15 },
      ]


   
    return(
        <div id="journalImage" >
             <Menu id="journalMenu" >
                <Menu.Item position="right" style={{color: 'white', fontWeight: 'bold'}}>Compositzo</Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text="Name" style={{color: 'white', fontWeight: 'bold'}}>
                        <Dropdown.Menu>
                            <Dropdown.Item>Account</Dropdown.Item>
                            <Dropdown.Item href="/entries-page">Entries</Dropdown.Item>
                            <Dropdown.Item>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
              </Menu> 

               <Grid textAlign='center' style={{ height: '100vh', fontFamily: 'Optima' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 900, height: 780, opacity: '0.9'  }}>
                <Form size='large' >
                    <Segment stacked>
                    <label>Title</label>
                        <Form.Input placeholder="Entry Title" 
                            type="text"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                         <label>Date</label>
                        <Form.Input  
                            type="date"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>How Are You Feeling?</label>
                        <br />
                        <Dropdown clearable options={options} selection />
                        <br /><br />
                        <label>Content</label>
                       <div className='editor'>   
                        <CKEditor 
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                        />
                       </div>
                       
                       
                       <br />
                        {/* <Form.TextArea style={{height: '500px'}}label='Content' 
                            placeholder="Your entry here"
                            type="text"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            required
                        /> */}
                         
                        <Button color='grey' fluid size='medium'>
                            <div style={{ fontFamily: 'Optima'}}>
                                Save
                            </div>
                        </Button>
                    </Segment>
                </Form>
            
                </Grid.Column>
            </Grid> 
        </div>
    )



}
export default JournalPage