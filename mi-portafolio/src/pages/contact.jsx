import { Button, Form, Input, Label, TextField } from '@heroui/react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'lucide-react'


function Contact() {
  return (
    <div className='text-black justify-center items-center flex flex-col p-5'>
      <h1 className='font-bold text-3xl'>Contact</h1>
      <p className='font-light text-gray-700'> Something interesting about me? Contact me!</p>
      <p className='font-semibold text-gray-700'>Use those vias to contact me:</p>

        <div className="flex gap-2 my-4">
          <Button variant="flat"><LinkedInLogoIcon/> LinkedIn</Button>
          <Button variant="flat"><Mail/> Email</Button>
        </div>

      <p className='font-light text-gray-700'>Or let me know your contact and some message, I will get back to you as soon as possible!</p>
      <Form className="flex flex-col gap-4 m-5 w-full max-w-md">
        <TextField>
            <Label>Name</Label>
            <Input />
        </TextField>
        <TextField>
            <Label>Email</Label>
            <Input />
        </TextField>
        <TextField>
            <Label>Message <span className="text-gray-500">(Optional)</span></Label>
            <Input />
        </TextField>
        <Button color="primary" type="submit" className="w-full justify-self-end">Send Message</Button>
      </Form>
    </div>
  )
}

export default Contact
