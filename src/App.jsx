import "./App.css";
import { useForm } from "react-hook-form";
import TextInput from "./components/form/TextInput";
import Select from "./components/form/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    firstName: z.string().min(1, "Required by zod"),
    lastName: z.string().min(1, "Required by zod"),
    email: z.string().min(1, "Required by zod"),
    company: z
        .string()
        .min(1, "Required by zod")
        .refine(
            (company) => company.endsWith("Digital"),
            "You can only work for tech companies"
        ),
    securityQuestion: z.enum(
        ["Pets name", "First car", "Mothers maiden name"],
        { errorMap: (issue) => ({ message: "Cant be mates brother" }) }
    ),
    securityAnswer: z.string().min(1, "Required by zod"),
});

function App() {
    const { register, handleSubmit, watch, formState } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <div className="formRow">
                <div className="formColumn">
                    <TextInput.HookForm
                        register={register}
                        name="firstName"
                        label="First Name"
                        type="text"
                        error={formState.errors.firstName?.message}
                    />
                </div>
                <div className="formColumn">
                    <TextInput.HookForm
                        register={register}
                        name="lastName"
                        label="Last Name"
                        type="text"
                        error={formState.errors.lastName?.message}
                    />
                </div>
            </div>
            <div className="formRow">
                <div className="formColumn">
                    <TextInput.HookForm
                        register={register}
                        name="email"
                        label="Email"
                        type="email"
                        error={formState.errors.email?.message}
                    />
                </div>
                <div className="formColumn">
                    <TextInput.HookForm
                        register={register}
                        name="company"
                        label="Company"
                        type="text"
                        error={formState.errors.company?.message}
                    />
                </div>
            </div>
            <div className="formRow">
                <div className="formColumn">
                    <Select.HookForm
                        name="securityQuestion"
                        label="Security Question"
                        error={formState.errors.securityQuestion?.message}
                        register={register}
                        options={[
                            "Pets name",
                            "First car",
                            "Mothers maiden name",
                            "Mates brother",
                        ]}
                    />
                </div>
                <div className="formColumn">
                    <TextInput.HookForm
                        register={register}
                        name="securityAnswer"
                        label="Security Answer"
                        type="text"
                        error={formState.errors.securityAnswer?.message}
                    />
                </div>
            </div>

            <button>Register</button>
        </form>
    );
}

export default App;
