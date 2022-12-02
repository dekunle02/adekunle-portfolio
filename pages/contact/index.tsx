import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../../components/core/formInput";
import { MdSend, MdMail } from "react-icons/md";

export type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  function onSubmit(data: ContactFormInputs) {
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Contact Me</h1>
      <h5>Send a message to me and I will get back to you as soon as I can.</h5>
      <a
        className="flex flex-row icon-button link md:px-5"
        href="mailto:samad@tellerbase.com"
      >
        <MdMail /> samad@tellerbase.com
      </a>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-5 gap-5 border dark:border-colorWhite/10 rounded-lg max-w-2xl my-5"
      >
        <FormInput
          id="name"
          type="text"
          showError={!!errors.name}
          errorMessage={errors.name?.message}
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />

        <FormInput
          id="email"
          type="email"
          showError={!!errors.email}
          errorMessage={errors.email?.message}
          placeholder="Email address"
          {...register("email", { required: "Please enter an email address" })}
        />

        <FormInput
          id="message"
          type="textarea"
          showError={!!errors.message}
          errorMessage={errors.message?.message}
          placeholder="What would you like to tell me?"
          {...register("message", {
            required: "You have not entered your message",
          })}
        />

        <button type="submit" className="button icon-button px-3 w-min mx-auto">
          <MdSend />
          Send
        </button>
      </form>
    </div>
  );
}
export default ContactMe;
