import { db } from '@/config';
import { Button, Form, Input, Label, TextArea, TextField,  } from '@heroui/react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { Mail } from 'lucide-react'
import { useEffect, useState } from 'react';


function Contact() {
  const [links, setLinks] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  
    useEffect(() => {
      const fetchLinks = async () => {
        try {
          const linksCollectionRef = collection(db, "links");
          const querySnapshot = await getDocs(linksCollectionRef);
          if (!querySnapshot.empty) {
            // Asignamos el objeto del primer documento directamente
            const linksData = querySnapshot.docs[0].data();
            setLinks(linksData);
          }
        } catch (error) {
          console.error("Error fetching links:", error);
        }
      };
      fetchLinks();
    }, []);

    const handleCopyEmail = () => {
      if (links.email) {
        navigator.clipboard.writeText(links.email).then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000); // El mensaje "¡Copiado!" desaparecerá después de 2 segundos
        }).catch(err => {
          console.error('Error al copiar el correo: ', err);
        });
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setIsSubmitting(false);
      setErrors({});
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) {
        newErrors.name = 'El nombre es obligatorio.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'El email es obligatorio.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'El formato del email no es válido.';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitStatus(null);

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      try {
        const contactCollectionRef = collection(db, "contacto");
        await addDoc(contactCollectionRef, {
          ...formData,
          sentAt: serverTimestamp(),
        });
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      }
    };


  return (
    <div className='text-black justify-center items-center flex flex-col p-5'>
      <h1 className='font-bold text-3xl'>Contact</h1>
      <p className='font-light text-gray-700'> Something interesting about me? Contact me!</p>
      <p className='font-semibold text-gray-700'>Use those vias to contact me:</p>

        <div className="flex gap-2 my-4">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="flat"><LinkedInLogoIcon/> LinkedIn</Button>
          </a>
          <Button variant="flat" onClick={handleCopyEmail}>
            {isCopied ? (
              '¡Copiado!'
            ) : (
              <><Mail/> Email</>
            )}
          </Button>
        </div>

      <p className='font-light text-gray-700'>Or let me know your contact and some message, I will get back to you as soon as possible!</p>
      <Form onSubmit={handleSubmit} className="flex flex-col gap-4 m-5 w-full max-w-md">
        <TextField isInvalid={!!errors.name}>
            <Label>Name</Label>
            <Input name="name" value={formData.name} onChange={handleInputChange} />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </TextField>
        <TextField isInvalid={!!errors.email}>
            <Label>Email</Label>
            <Input name="email" type="email" value={formData.email} onChange={handleInputChange} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </TextField>
        <TextField>
            <Label>Message <span className="text-gray-500">(Optional)</span></Label>
            <TextArea name="message" value={formData.message} onChange={handleInputChange} />
        </TextField>
        <Button color="primary" type="submit" className="w-full justify-self-end" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Send Message'}
        </Button>

        {submitStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
            ¡Mensaje enviado con éxito! Gracias por contactarme.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md text-center">
            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
          </div>
        )}
      </Form>
    </div>
  )
}

export default Contact
