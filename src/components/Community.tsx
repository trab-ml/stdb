import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './community.css'

type FormData = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

function Community() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // gérer la soumission des données en envoyant une requête au serveur
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nom :</label>
        <input type="text" {...register('nom', { required: true })} name='nom'/>
        {errors.nom && <span>Ce champ est requis.</span>}
      </div>
      <div>
        <label>Email :</label>
        <input
          type="text"
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i
          })}
          name='email'
        />
        {errors.email && errors.email.type === 'required' && (
          <span>Ce champ est requis.</span>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <span>Veuillez saisir une adresse email valide.</span>
        )}
      </div>
      <div>
        <label>Sujet</label>
        <input type="text" {...register('sujet', { required: true })} name='sujet' />
        {errors.sujet && <span>Ce champ est requis.</span>}
      </div>
      <div>
        <label>Message :</label>
        <textarea {...register('message', { required: true })} name='message' />
        {errors.message && <span>Ce champ est requis.</span>}
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}
export default  Community;
// export default ContactForm