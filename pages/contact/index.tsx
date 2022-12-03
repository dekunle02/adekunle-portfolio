import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../../components/core/formInput";
import { MdSend, MdMail } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const SubmitState = {
  default: "default",
  sending: "sending",
  success: "success",
  failure: "failure",
};

function ContactMe() {
  const [submitState, setSubmitState] = useState(SubmitState.default);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  function onSubmit(data: ContactFormInputs) {
    if (submitState === SubmitState.sending) return;
    setSubmitState(SubmitState.sending);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setSubmitState(SubmitState.success);
        reset();
      })
      .catch((data) => {
        setSubmitState(SubmitState.failure);
      });
  }

  function handleChange() {
    if (submitState !== SubmitState.default) {
      setSubmitState(SubmitState.default);
    }
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
        onChange={handleChange}
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

        <button
          type="submit"
          className="button icon-button px-3 w-min mx-auto"
          disabled={submitState === SubmitState.sending}
        >
          {submitState === SubmitState.sending ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            <MdSend />
          )}
          Send
        </button>
        {submitState === SubmitState.success && (
          <p className="text-teal-600 text-center text-sm">
            Your form has been sent successfully!
          </p>
        )}

        {submitState === SubmitState.failure && (
          <p className="text-rose-800 text-center text-sm">
            Form Not Sent. An error occured.
          </p>
        )}
      </form>
    </div>
  );
}
export default ContactMe;
