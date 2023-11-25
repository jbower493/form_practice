import TextInput from "../components/form/TextInput";
import Select from "../components/form/Select";
import * as z from "zod";
import { useState } from "react";

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
        { errorMap: () => ({ message: "Cant be mates brother" }) }
    ),
    securityAnswer: z.string().min(1, "Required by zod"),
});

function NoForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [securityAnswer, setSecurityAnswer] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                console.log(firstName);
            }}
        >
            <h1>No Form</h1>
            <div className="formRow">
                <div className="formColumn">
                    <TextInput
                        name="firstName"
                        label="First Name"
                        type="text"
                        error={null}
                    />
                </div>
                <div className="formColumn">
                    <TextInput
                        name="lastName"
                        label="Last Name"
                        type="text"
                        error={null}
                    />
                </div>
            </div>
            <div className="formRow">
                <div className="formColumn">
                    <TextInput
                        name="email"
                        label="Email"
                        type="email"
                        error={null}
                    />
                </div>
                <div className="formColumn">
                    <TextInput
                        name="company"
                        label="Company"
                        type="text"
                        error={null}
                    />
                </div>
            </div>
            <div className="formRow">
                <div className="formColumn">
                    <Select
                        name="securityQuestion"
                        label="Security Question"
                        error={null}
                        options={[
                            "Pets name",
                            "First car",
                            "Mothers maiden name",
                            "Mates brother",
                        ]}
                    />
                </div>
                <div className="formColumn">
                    <TextInput
                        name="securityAnswer"
                        label="Security Answer"
                        type="text"
                        error={null}
                    />
                </div>
            </div>

            <button>Register</button>
        </form>
    );
}

export default NoForm;
