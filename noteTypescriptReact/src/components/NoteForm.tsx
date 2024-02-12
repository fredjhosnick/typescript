import { Col, Form, FormControl, FormGroup, Stack } from "react-bootstrap"


const NoteForm = () => {
  return (
    <Form>
      <Stack gap={4}>
   <Col>
   <FormGroup controlId="title">
    <Form.Label>Title</Form.Label>
    <FormControl required/>
   </FormGroup>
   
   </Col>
      </Stack>
    </Form>
  )
}

export default NoteForm

