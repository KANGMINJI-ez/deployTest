import Checkbox from "../component/Checkbox";
import { useForm } from "react-hook-form";
import Input from "../component/Input";
import Radio from "../component/Radio";
import { useEffect, useState } from "react";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      radio: "radio1",
    },
  });

  const [formValue, setFormValue] = useState(null);

  const radioValue = [
    {
      name: "radio",
      value: "radio1",
      label: "radio1",
      id: "radio1",
    },
    {
      name: "radio",
      value: "radio2",
      label: "radio2",
      id: "radio2",
    },
  ];

  const checkboxRegister = register("checkbox", {
    required: "체크해주세요"
  });

  const inputRegister = register("input", {
    required: "필수 입력값입니다.",
  });

  const radioRegister = register("radio", {
    required: "필수 입력값입니다.",
});

  const onSubmit = (data) => {
    console.log(data);
    setFormValue(data);
  };

  useEffect(() => {
    console.log(formValue, "formValue");
  }, [formValue]);

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox
          label="test"
          id="checkbox"
          register={checkboxRegister}
          errors={errors?.checkbox && errors?.checkbox.message}
        />
        <Input
          label="input"
          id="input"
          register={inputRegister}
          errors={errors?.input && errors?.input.message}
        />
        <Radio
          value={radioValue}
          register={radioRegister}
          errors={errors?.radio && errors?.radio.message}
        />
        {/* <div className="form-wrap">
 
        </div> */}

        <button type="submit">제출하기</button>
      </form>
      {formValue && (
        <div>
          <p className="value">{formValue.radio}</p>
          <p className="value">{formValue.checkbox && "checkbox true"}</p>
          <p className="value">{formValue.input}</p>
        </div>
      )}
    </div>
  );
};

export default FormPage;