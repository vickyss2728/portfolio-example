import { useActionState } from "react"; 
import { useFormStatus } from "react-dom";
import { personalData } from "../data";

// Simulated Server Action
const submitContactForm = async (_prevState: string | null, formData: FormData) => {
  // In a real app, you would send this to an API
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  const name = formData.get("name");
  if (!name) return "Name is required";
  return `Thank you ${name}! I will contact you shortly.`;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary w-100 py-2" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
};

const Contact = () => {
  const [state, formAction] = useActionState(submitContactForm, null);

  return (
    <footer id="contact" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <h2 className="fw-bold mb-4">Let's Connect</h2>
            <p className="mb-4 text-white-50">
                Open to Full Stack and Front-End opportunities in Chennai, Bangalore, and Madurai.
            </p>

            <div className="card text-dark text-start p-4 mb-5 border-0">
               {state && <div className="alert alert-success">{state}</div>}
               <form action={formAction}>
                 <div className="mb-3">
                   <label className="form-label">Name</label>
                   <input name="name" className="form-control" required />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Email</label>
                   <input name="email" type="email" className="form-control" required />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Message</label>
                   <textarea name="message" className="form-control" rows={3}></textarea>
                 </div>
                 <SubmitButton />
               </form>
            </div>

            <div className="d-flex justify-content-center gap-3">
               <a href={`mailto:${personalData.email}`} className="text-white text-decoration-none">
                 <i className="bi bi-envelope-fill me-2"></i> {personalData.email}
               </a>
               <span className="text-white-50">|</span>
               <a href={`tel:${personalData.phone}`} className="text-white text-decoration-none">
                 <i className="bi bi-telephone-fill me-2"></i> {personalData.phone}
               </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;